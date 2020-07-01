const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// scaffold out how we want data in a particular collection to be structured
// add validation to data type
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name specified"],
  },
  color: {
    type: String,
    required: [true, "No color specified"],
  },
  rating: {
    type: Number,
    required: [true, "No rating specified"],
    min: 0,
    max: 10,
  },
});

// use schema to create a model
// creates a new collection called Fruit(s) whose documents have to stick to structure defined in schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// create new document to go into a collection
const apple = new Fruit({ name: "Apple", color: "Red", rating: 8 });
const kiwi = new Fruit({ name: "Kiwi", color: "Green", rating: 8 });
const banana = new Fruit({ name: "Banana", color: "Yellow", rating: 8 });
const mango = new Fruit({ name: "Mango", color: "Orange", rating: 8 });
const dragonfruit = new Fruit({
  name: "Dragonfruit",
  color: "Purple",
  rating: 8,
});

// validation check
// dragonfruit.save();

// saves the document into a collection
// apple.save();
// Fruit.insertMany([apple, kiwi, banana, mango], function (error, docs) {});

// deletes one document in a collection
Fruit.deleteOne({ name: "Kiwi" }, function (err) {
  if (err) {
    console.log("Not able to delete document.");
  } else {
    console.log("Successfully deleted document.");
  }
});

// update accepts filter to find the doc you want to edit and the changes you want to make to it
Fruit.updateOne({ name: "Apple" }, { name: "Fuji Apple" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated document.");
  }
});

// gets all the documents in a collection
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit);
    });
    mongoose.connection.close(); 
  }
});

// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });
// const Person = mongoose.model("Person", personSchema);
// const person = new Person({ name: "Bob", age: 30 });
// person.save();
