/**
 * we will define the structure of our users here
 */

// import the mongoose module and create a schema
const mongoose = require("mongoose");
// we will create a object inside the schema object
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// create a model from the schema
// the first argument is the name of the collection in the database
// the second argument is the schema we created above
const UserModel = mongoose.model("users", UserSchema);

// export the model, so we have access to this model. and we can make changes to tables or collections in the database
module.exports = UserModel;
