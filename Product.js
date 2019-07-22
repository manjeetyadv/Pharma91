// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  ProductName: {
    type: String
  },
  ProductDescription: {
    type: String
  },
  ProductPrice: {
    type: Number
  }
},{
    collection: 'ProductCollection'
});

module.exports = mongoose.model('Product', Product);

let Customers = new Schema({
  CustomerName: {
    type: String
  }
},{
    collection: 'CustomerCollections'
});

module.exports = mongoose.model('Customers', Customers);