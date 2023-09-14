const db = require("../config/database.js");

const insertCartItem = (data, result) => {
    db.query("INSERT INTO Cart (userId, product_id, quantity) VALUES (?, ?, ?)",
        [data.userId, data.product_id, data.quantity],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const getCartItemsByUserId = (userId, result) => {
    db.query("SELECT C.cart_id, C.quantity, p.product_name, p.price, p.primary_image_url FROM Cart C JOIN products p ON C.product_id = p.product_id WHERE C.userId = ?", [userId], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

const deleteCartItem = (cart_id, result) => {
    db.query("DELETE FROM Cart WHERE cart_id = ?", [cart_id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

module.exports = {
    insertCartItem,
    getCartItemsByUserId,
    deleteCartItem,
};
