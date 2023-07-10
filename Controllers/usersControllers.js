const User = require("../Model/user");

// Post Method

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

// Get Method

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// Update Method

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

// Delete Method

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
