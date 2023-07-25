require('dotenv').config();

const Serever = require('./models/server.js')

const server = new Serever();

server.listen();
