const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //store data in req.body


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);



app.listen(3000,()=>console.log('Listening on port 3000'));