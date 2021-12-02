const { Schema, model } = require("mongoose");

const giftSchema = new Schema({
  name: {
    type: String,
    required: "what is the name of gift!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  giftPrice: {
    type: Number,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  purchased: {
    type: Boolean,
    minlength: 1,
    maxlength: 280,
    trim: true,
  }
});
const Gift = model("Gift", giftSchema);

module.exports = Gift;
