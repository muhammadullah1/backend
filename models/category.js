const { Category } = require('../schema/category');


module.exports = {
  create: async (product) => {
    return await Category.create(product);
  },
  get: async (filter) => {
    return await Category.find(filter);
  },
  gettBy: async (filter) => {
    return await Category.findOne(filter);
  },
  delete: async (id) => {
    return await Category.deleteOne({ _id: id });
  },
  update: async (id, data) => {
    return await Category.updateOne({ _id: id }, data);
  },
};
