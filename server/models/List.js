const { Schema, model } = require("mongoose");
const listSchema = new Schema({
    list: {
      type: String,
      required: "what is the item item",
      minlength: 1,
      maxlength: 280,
      trim: true,
    }
});

const List = model("list", listSchema);

module.exports = List;


