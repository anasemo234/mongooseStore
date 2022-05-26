const express = require('express');
const Product = require('../models/products');
const router = express.Router();

// === SEED DATA === //
const productSeed = require('../models/productSeed')
router.get('/products/seed', (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});
    Product.create(productSeed, (error, data) => {
        res.redirect('/products')
        });
    });
    
    // === ROUTES === //
    
    // Index
    router.get('/', (req, res) => {
        Product.find({}, (error, allProducts) => {
            res.render('index.ejs', {
                products: allProducts,
            })
        })
        
    })
    
    
    
    // New
    router.get('/new', (req, res) => {
        res.render('new.ejs');
    });
    
    // Delete
    router.delete('products/:id', (req, res) => {
        Product.findByIdAndRemove(req.params.id, (err, data) => {
            res.redirect('/products')
        })
    })
    
    // Update
    router.put('/:id', (req, res) => {
        Product.findByIdAndUpdate (
            req.params.id,
            req.body,
            {new: true},
            (error, updateProduct) => {
                res.redirect(`/products/${req.params.id}`);
            }
        );
    })
    
    router.get('/products/:id/buy'), (req, res) => {
    
    };
    
    
    // Create
    router.post('/', (req, res) => {
        Product.create(req.body, (error, createdProduct) => {
            res.redirect('/products');
        });
    });
    
    
    // Edit
    router.get('/:id/edit', (req, res) => {
        Product.findById(req.params.id, (error, foundProduct) => {
                res.render('edit.ejs', {
                    product: foundProduct,
              })
        })
    })
    
    
    // Show
    router.get('/:id', (req, res) => {
        Product.findById(req.params.id, (err, foundProduct) => {
            res.render('show.ejs', {
                product: foundProduct,
            });
        });
    });

    module.exports = router;