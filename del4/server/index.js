const io = require('socket.io')();


const server = io.listen(8000);

// event fired every time a new client connects:
server.on("connection", (socket) => {

    console.info(`Client connected [id=${socket.id}]`);

    // socket.emit('broadcast', { payload: 'yolo' }); // everyone gets it but the sender
   
    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        console.info(`Client gone [id=${socket.id}]`);
    });

    function sendToClient(data){
      console.log(data);
      socket.emit('broadcast', { payload: data }); // everyone gets it but the sender
    }

    const OSC = require('osc-js')
    const options = { send: { port: 11245 } }
    const osc = new OSC({ plugin: new OSC.DatagramPlugin(options) })

    osc.on('open', () => {

      osc.on('*', message => {
        // if(!message.args[0].includes("begin") && !message.args[0].includes("end")){
        //   console.log(message.args);
        //   sendToClient(message.args);
        // }
        // console.log(message.args);
        sendToClient(message.args);
      })

    })

    osc.open({ port: 5000 }) // bind socket to localhost:5000 

});