const db = require("../config/database.js");

const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

const getProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
};

const insertProduct = (data, result) => {
    db.query("INSERT INTO products (product_name, category_id, price, description, primary_image_url) VALUES (?, ?, ?, ?, ?)",
        [data.product_name, data.category_id, data.price, data.description, data.primary_image_url],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const updateProductById = (data, id, result) => {
    db.query("UPDATE products SET product_name = ?, category_id = ?, price = ?, description = ?, primary_image_url = ? WHERE product_id = ?",
        [data.product_name, data.category_id, data.price, data.description, data.primary_image_url, id],
        (err, results) => {
            if (err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
};

const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};

module.exports = {
    getProducts,
    getProductById,
    insertProduct,
    updateProductById,
    deleteProductById,
};
