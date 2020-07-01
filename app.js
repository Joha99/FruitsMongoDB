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

const kiwi = new Fruit({ name: "Kiwi", color: "Green", rating: 8 });
const banana = new Fruit({ name: "Banana", color: "Yellow", rating: 8 });
const mango = new Fruit({ name: "Mango", color: "Orange", rating: 8 });

// saves the document into a collection
// fruit.save();
// Fruit.insertMany([kiwi, banana, mango], function (error, docs) {});

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({ name: "Bob", age: 30 });

// person.save();
