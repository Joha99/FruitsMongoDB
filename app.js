const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// scaffold out how we want data in a particular collection to be structured
const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  rating: Number,
});

// use schema to create a model
// creates a new collection called Fruit(s) whose documents have to stick to structure defined in schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// create new document to go into a collection
const fruit = new Fruit({ name: "Apple", color: "Red", rating: 8 });

// saves the document into a collection 
fruit.save(); 
