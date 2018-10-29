# Tensorflow implementation of Drawing Classification

This repo contains the TensorFlow code for sketch-rnn, the recurrent neural network model described in Teaching Machines to Draw and A Neural Representation of Sketch Drawings. We train our model on a dataset of hand-drawn sketches, each represented as a sequence of motor actions controlling a pen: which direction to move, when to lift the pen up, and when to stop drawing. You can use the jupyter notebook included to encode, decode, and morph between two vector images, and also generate new random ones.

## Steps for Delivarable 1 :

1. Download [Quick Draw Dataset](https://quickdraw.withgoogle.com/data)
2. Setup [Magenta Environment](https://github.com/tensorflow/magenta/blob/master/README.md)
3. Download SketchRNN code from github: [Sketch-RNN: A Generative Model for Vector Drawings](https://github.com/tensorflow/magenta/tree/master/magenta/models/sketch_rnn)
4. Replace sketch_rnn_train.py file with the sketch_rnn_train.py given in this repo. The changes made were rotating input dataset. 
5. You can use [SketchRNN: load pre-trained models and draw things with sketch-rnn](https://github.com/tensorflow/magenta-demos/blob/master/jupyter-notebooks/Sketch_RNN.ipynb) to view the result of the model using jupyer notebook.
6. Additionally, you use this model for the web by converting into a magenta-js readable format. [Sketch_RNN_TF_To_JS_Tutorial](https://github.com/tensorflow/magenta-demos/blob/master/jupyter-notebooks/Sketch_RNN_TF_To_JS_Tutorial.ipynb)
7. Use json output of previous step in the magenta-js sketch rnn web application. [Magenta-js SketchRNN](https://github.com/tensorflow/magenta-js/tree/master/sketch)
