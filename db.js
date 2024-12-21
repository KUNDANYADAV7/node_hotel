const mongoose = require('mongoose');

// Define the MongoDB Connection URL
const  mongoURL = 'mongodb://localhost:27017/ht'

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