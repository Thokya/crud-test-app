const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

// load routers
app.use('/', require('./server/routes/router'));

app.listen(port, () => console.log(`server running on localhost:${port}`));