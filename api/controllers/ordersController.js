const { createOrder, insertOrderItem, getOrderItemsByOrderId } = require("../models/ordersModel.js");

// Place an order
const placeOrder = (req, res) => {
    const orderData = req.body;
    createOrder(orderData, (err, orderResult) => {
        if (err) {
            res.send(err);
        } else {
            const order_id = orderResult.insertId;
            const orderItems = req.body.orderItems; // An array of order items

            // Insert order items
            orderItems.forEach(item => {
                item.order_id = order_id;
                insertOrderItem(item, (err, itemResult) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });

            res.json({
                order_id,
                message: "Order placed successfully.",
            });
        }
    });
};

// View user's order history
const viewOrderHistory = (req, res) => {
    const user_id = req.params.user_id;
    getOrderHistoryByUserId(user_id, (err, orders) => {
        if (err) {
            res.send(err);
        } else {
            // For each order, retrieve associated order items
            const orderIds = orders.map(order => order.order_id);
            const orderHistory = [];

            orderIds.forEach(orderId => {
                getOrderItemsByOrderId(orderId, (err, items) => {
                    if (err) {
                        res.send(err);
                    } else {
                        const order = orders.find(order => order.order_id === orderId);
                        order.orderItems = items;
                        orderHistory.push(order);

                        // Check if all order items are fetched
                        if (orderHistory.length === orderIds.length) {
                            res.json(orderHistory);
                        }
                    }
                });
            });
        }
    });
};

module.exports = {
    placeOrder,
    viewOrderHistory,
};
