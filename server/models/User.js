const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const itemSchema = require("./Item");
const userSchema = new Schema(
  {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // set savedItem to be an array of data that adheres to the itemSchema
  savedItem: [itemSchema],
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);

//hash the user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
