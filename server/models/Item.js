const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  title: {
    type: String,
    required: "what is the title item!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
});
const Item = model("Thought", itemSchema);

module.exports = Item;

/*
title:DataTypes.STRING,
img:DataTypes.STRING,
link: DataTypes.STRING,
*/
