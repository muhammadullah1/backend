const { User } = require('../schema/user');


module.exports = {
  createUser: async (user) => {
    return await User.create(user);
  },
  getUsers: async (filter) => {
    return await User.find(filter);
  },
  getUserBy: async (filter) => {
    return await User.findOne(filter);
  },
  deleteUser: async (ID) => {
    return await User.deleteOne({ _id: ID });
  },
  updateUser: async (ID, user) => {
    return await User.updateOne({ _id: ID }, user);
  },
};
