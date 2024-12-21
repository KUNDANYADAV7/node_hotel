const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //store data in req.body


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);




app.listen(PORT,()=>console.log('Listening on port 3000'));