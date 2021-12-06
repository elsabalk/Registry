const { Schema } = require("mongoose");

// This is a sub document schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = itemSchema;
/*
title:DataTypes.STRING,
img:DataTypes.STRING,
link: DataTypes.STRING,
*/
