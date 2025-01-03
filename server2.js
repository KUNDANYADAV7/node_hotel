const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //store data in req.body

// Middleware Function
const logRequest = (req,res,next)=>{
  console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`)
  next(); //Move on to the next phase
}

app.use(logRequest);



app.use(passport.initialize());

const localAuthMiddleware =  passport.authenticate('local', {session:false})

app.get('/',(req,res)=>{
  res.send('Welcome to our hotel how can i help you?');
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
const Person = require('./models/Person');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);




app.listen(PORT,()=>console.log('Listening on port 3000'));