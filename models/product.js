const { Product } = require('../schema/product');


module.exports = {
  createProduct: async (product) => {
    return await Product.create(product);
  },
  getProducts: async (filter) => {
    return await Product.find(filter);
  },
  getProductBy: async (filter) => {
    return await Product.findOne(filter);
  },
  deleteProduct: async (id) => {
    return await Product.deleteOne({ _id: id });
  },
  updateProduct: async (id, product) => {
    return await Product.updateOne({ _id: id }, product);
  },
};
