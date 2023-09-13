const express = require("express");
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const router = express.Router()
const productController = require("../controllers/Product");
const { getProductsByCategory } = require('../controllers/Product');
const cartController = require("../controllers/cartController");
// const ordersController = require("../controllers/ordersController.js");
const Users = require('../models/user');
const users = new Users();
//Import all model's objects
//User's router
router.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
router.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
router.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
router.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
router.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
router.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
router.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
// init express router
// const router = express.Router();
const {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = productController;

// Product routes
router.get("/products", showProducts);
router.get("/products/:id", showProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

// Get products by category
router.get('/products/category/:category_id', getProductsByCategory);

const {
    viewCart,
    addToCart,
    removeFromCart,
  } = cartController;
// Cart routes
router.post("/cart", addToCart);
router.get("/cart/:user_id", viewCart);
router.delete("/cart/:cart_id", removeFromCart);

// // Orders routes
// router.post("/orders", verifyAToken, bodyParser.json(), ordersController.placeOrder);
// router.get("/orders/:user_id", verifyAToken, ordersController.viewOrderHistory);

module.exports = {router, verifyAToken};