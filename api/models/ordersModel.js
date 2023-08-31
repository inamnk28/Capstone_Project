const db = require("../config/database.js");

const createOrder = (data, result) => {
    db.query("INSERT INTO Orders (user_id, total_amount) VALUES (?, ?)",
        [data.user_id, data.total_amount],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const insertOrderItem = (data, result) => {
    db.query("INSERT INTO OrderItems (order_id, product_id, quantity, price_per_unit) VALUES (?, ?, ?, ?)",
        [data.order_id, data.product_id, data.quantity, data.price_per_unit],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

module.exports = {
    createOrder,
    insertOrderItem,
};
