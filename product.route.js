// product.route.js

const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('./Product');
let Customers = require('./Product');

// Defined get data(index or listing) route
productRoutes.route('/products').get(function (req, res) {
  Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});
// 
productRoutes.route('/customers').get(function (req, res) {
  Customers.find(function (err, customer){
    if(err){
      console.log(err);
    }
    else {
      res.json(customer);
    }
  });
});

// Defined edit route
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (!product)
      res.status(404).send("Record not found");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
    Product.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;