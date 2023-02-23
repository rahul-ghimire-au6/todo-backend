const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const morgan = require('morgan')
const cors=require('cors')
const todoRouter = require('./routes/todoRoutes');


app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    cors({
        origin:"*",  
        methods: "GET,POST,PUT,DELETE,PATCH",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true
    })
);

require("./config/db");


app.use(todoRouter);

module.exports = app;