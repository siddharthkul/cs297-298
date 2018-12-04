const OSC = require('osc-js')

const options = { send: { port: 11245 } }
const osc = new OSC({ plugin: new OSC.DatagramPlugin(options) })

osc.on('open', () => {

  osc.on('*', message => {
    if(!message.args[0].includes("begin") && !message.args[0].includes("end")){
      console.log(message.args)
    }
    //console.log(message.args)
    //console.log('-')
  })

  // send only this message to `localhost:9002`
  //osc.send(new OSC.Message('/hello'), { port: 9002 })

  //setInterval(() => {
  //   // send these messages to `localhost:11245`
  //   osc.send(new OSC.Message('/response', Math.random()))
  //}, 1000)
})

osc.open({ port: 5000 }) // bind socket to localhost:5000
