const { insertCartItem, getCartItemsByUserId, deleteCartItem } = require("../models/cartModel.js");

// Add item to cart
// const addToCart = (req, res) => {
//     const data = req.body;
//     insertCartItem(data, (err, results) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(results);
//         }
//     });
// };
const addToCart = (req, res) => {
    const data = req.body;
    // Ensure that the data includes userId, product_id, and quantity
    if (!data.userId || !data.product_id || !data.quantity <= 0) {
        return res.status(400).json({ error: "Invalid request data" });
    }

    insertCartItem(data, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to add item to cart" });
        }
        res.json({ message: "Item added to cart successfully", results });
    });
};

// View user's cart
// const viewCart = (req, res) => {
//     const user_id = req.params.user_id;
//     getCartItemsByUserId(user_id, (err, results) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(results);
//         }
//     });
// };
const viewCart = (req, res) => {
    const userId = req.params.userId;
    console.log("userId from params:", userId);
    // Ensure that user_id is valid (e.g., numeric or whatever format you use)
    if (!userId || isNaN(userId)) {
        return res.status(400).json({ error: "Invalid user ID" });
    }

    getCartItemsByUserId(userId, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to retrieve cart items" });
        }
        res.json({ cartItems: results });
    });
};

// Delete item from cart
// const removeFromCart = (req, res) => {
//     const cart_id = req.params.cart_id;
//     deleteCartItem(cart_id, (err, results) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(results);
//         }
//     });
// };
const removeFromCart = (req, res) => {
    const cart_id = req.params.cart_id;
    // Ensure that cart_id is valid (e.g., numeric or whatever format you use)
    if (!cart_id) {
        return res.status(400).json({ error: "Invalid cart ID" });
    }

    deleteCartItem(cart_id, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to delete item from cart" });
        }
        res.json({ message: "Item removed from cart successfully", results });
    });
};

module.exports = {
    addToCart,
    viewCart,
    removeFromCart,
};
