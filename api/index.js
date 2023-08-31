// const {express, routes} = require('./controllers/Product');
// const cookieParser = require('cookie-parser')
// const cors = require('cors');
// const path = require('path');
// const app = express();
// const port = +process.env.PORT || 3000;

// app.use(
//     express.static('/static'),
//     express.urlencoded({
//         extended: false
//     }),
//     cookieParser(),
//     cors(),
//     routes
// )
// app.listen(port, () => {
//   console.log(`The server is running on port ${port}`);
// });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {router, verifyAToken} =  require("./routes/routes.js");
// import express
//import express from "express";
// import cors
//import cors from "cors";
//import bodyParser from "body-parser";
// import routes
//import Router from "./routes/routes.js";
// init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use router
// app.use(Router);
app.use(router);
app.listen(5000, () => console.log('Server running at http://localhost:5000'));