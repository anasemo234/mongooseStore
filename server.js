// Dependencies
const express = require('express')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/products')

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + 'is mongo not running?'));
db.on('connected', () => console.log( 'mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware || Body parser middleware: give us access to req.body
app.use(express.urlencoded({extended: true}))


// === ROUTES === //

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))