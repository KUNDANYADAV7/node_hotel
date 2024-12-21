const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to our Five Star hotel... How can i help you ');
})

app.get('/chicken',function(req,res){
  res.send('I would love to serve you');
})

app.get('/idli',function(req,res){
  var customized_italy = {name:'rava idli',size:'10cm diameter',is_sambhar:true,is_chatney:false};
  res.send(customized_italy);
})

app.listen(3000,()=>console.log('Listening on port 3000'));