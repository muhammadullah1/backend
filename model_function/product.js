const { Product } = require("../models/product");

module.exports = {
  create: async (data) => {
    return await Product.create(data);
  },
  get: async (filter) => {
    return await Product.find(filter);
  },
  getBy: async (filter) => {
    return await Product.findOne(filter);
  },
  delete: async (id) => {
    return await Product.deleteOne({ _id: id });
  },
  update: async (id, data) => {
    return await Product.updateOne({ _id: id }, data);
  },
};
