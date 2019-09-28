const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const ItemSchema = new Schema({
  // `title` must be of type String
    name: String,
    description: String,
    price: Number
});

// This creates our model from the above schema, using mongoose's model method
const Item = mongoose.model("Item", ItemSchema);

// Export the Note model
module.exports = Item;
