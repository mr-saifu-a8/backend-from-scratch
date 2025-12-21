const User = require("../models/user");
const bcrypt = require('bcrypt')

const userRegister = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters",
    });
  }

  
  const user = await User.create({
    username,
    password,
  });

  res.status(201).json({
    success: true,
    message: "User created",
    UserId: user._id,
  });
};

const userUpdate = async (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "User id required",
    });
  }

  const updatedUser = await User.findOneAndUpdate(
    { _id: id },
    { username, password },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(400).json({
      success: false,
      message: 'User not found'
    })
  }

  res.status(201).json({
    success: true,
    message: 'User updated successfully',
    user: updatedUser
  })
};


const deleteUser = async (req, res) => {
  const { id } = req.params
  
  const user = await User.findByIdAndDelete(id)

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found"
    })
  }

  res.status(201).json({
    success: true,
    message: "User deleted successfully"
  })
}
module.exports = { userRegister, userUpdate, deleteUser };
