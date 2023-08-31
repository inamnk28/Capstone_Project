const db = require("../config/database.js");

const insertCartItem = (data, result) => {
    db.query("INSERT INTO Cart (user_id, product_id, quantity) VALUES (?, ?, ?)",
        [data.user_id, data.product_id, data.quantity],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const getCartItemsByUserId = (user_id, result) => {
    db.query("SELECT * FROM Cart WHERE user_id = ?", [user_id], (err, results) => {
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
