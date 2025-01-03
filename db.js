const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB Connection URL
const  mongoURL = process.env.MONGODB_URL_LOCAL
// const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Get the default connection
// Moongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected',()=>{
  console.log('Connected to MongoDB Server');
})

db.on('error',(err)=>{
  console.log('MongoDB connection Error ', err);
})

db.on('disconnected',()=>{
  console.log('MongoDB disconnected');
})

//Export te database connection
module.exports = db;