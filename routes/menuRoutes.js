const express = require('express');
const router = express.Router();
const MenuItem = require('../models/Menu');

router.post('/',async (req,res)=>{
  try {
   const data = req.body; //Assuming the request body contains the person data
 
   //create a new Menu document using the Mongoose model
   const newMenu = new MenuItem(data);
 
   //Save the new Person to the database
   const response = await newMenu.save();
   console.log('data saved');
   res.status(200).json(response);
  } catch (error) {
   console.log(error);
   res.status(500).json({error: " Internal Server Error"});
  }
 })

 // Get method to get the menu
 router.get('/',async (req,res)=>{
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  res.status(500).json({error: " Internal Server Error"}); 
  }
})

router.get('/:tasteType',async (req,res)=>{
  try{
    const tasteType = req.params.tasteType; // Extract the work type from the URL parameter
    if(tasteType == 'sweet' || tasteType == 'sour'|| tasteType == 'spicy'){
      const response = await MenuItem.find({taste:tasteType});
      console.log('data fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error:' Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({err: " Internal Server Error"});
  }
})

router.put('/:id',async (req,res)=>{
  try{
    const menuId = req.params.id;
    const updatedMenuData = req.body;
  
    const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenuData,{
      new:true, // Return the updated document
      runValidators: true, //Run Mongoose Validation
    })
  
    if(!response){
      return res.status(404).json({error:' Item not Found'});
    }

    console.log('data updated');
      res.status(200).json(response);
  }catch(error){
    console.log(error);
    res.status(500).json({error: " Internal Server Error"});
  }
 })


 router.delete('/:id',async (req,res)=>{
  try {
    const menuId = req.params.id;

    const response = await MenuItem.findByIdAndDelete(menuId);
    if(!response){
      return res.status(404).json({error:' Item not Found'});
    }

    console.log('data deleted');
      res.status(200).json({message:' Item Deleted Successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({error: " Internal Server Error"});
  }
 })

module.exports = router;


//comment added for testing purposes