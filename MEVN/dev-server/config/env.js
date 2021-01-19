import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    console.log("setting dev enviroment");
    process.env.NODE_ENV = 'development';
    app.use(bodyParser.json()); // Allows parsing JSON from the client
    app.use(morgan('dev')); // Log HTTP Requests to the node console (for debugging purposes)
    app.use(cors()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
}

function setProdEnv(app) {
    console.log("setting prod enviroment")
    process.env.NODE_ENV = 'production';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}