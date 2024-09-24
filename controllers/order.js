const { Order, Product } = require("../models");
const ApiError = require("../utils/ApiError");
const { createPaymentIntent } = require("../services/stripe/paymentIntent");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { body: data, user } = req;

      if(!user) throw new ApiError(400, "Invalid user");
      const productIds = data.map(({ productId }) => productId);
      const products = await Product.find({ _id: { $in: productIds } });
      if(products.length == 0) throw new ApiError(400, "Products not found");

      const amount = data.reduce((acc, currentData) => {
        const product = products.find(product => product._id.toString() === currentData.productId.toString());
        if (!product) throw new ApiError(400, `Product with id ${currentData.productId} not found`);
        return acc + (product.price * currentData.quantity);
      }, 0);
      
      
      const orderDetails = await createPaymentIntent(amount,  currency = "usd");
      const order = new Order({
        buyer: user._id,
        paymentIntentId: orderDetails.id,
        totalPrice: amount,
        orderDetails: data.map((item) => {
          const product = products.find((product) => product._id.toString() === item.productId.toString());
          return {
            title: product.title,
            quantity: item.quantity,
            price: product.price,
          };
        }),
      });
      
      await order.save();

      res.send({
        success: true,
        message: "order placed successfully",
        data: {
          clientSecret: orderDetails.client_secret
        },
      });
    } catch (error) {
      next(error);
    }
  },
  get: async (req, res, next) => {
    try {
      const products = await Order.find();

      res.send({
        success: true,
        message: "orders list",
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },
};
