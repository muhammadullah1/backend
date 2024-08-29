const { SubCategory } = require('../schema/sub_category');


module.exports = {
  create: async (product) => {
    return await SubCategory.create(product);
  },
  get: async (filter) => {
    return await SubCategory.find(filter);
  },
  gettBy: async (filter) => {
    return await SubCategory.findOne(filter);
  },
  delete: async (id) => {
    return await SubCategory.deleteOne({ _id: id });
  },
  update: async (id, data) => {
    return await SubCategory.updateOne({ _id: id }, data);
  },
};
