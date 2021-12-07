const { Schema } = require("mongoose");


const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price:{
    type: Number
  },
  description: {
    type: String,
    
  },
  productId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  
});

module.exports = productSchema;
