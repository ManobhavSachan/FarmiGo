const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address is already taken"],
    },
    phone: {
      type: String,
      required: [true, "Please add the user Phone No."],
      unique: [true, "Phone No. is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
    wish: [
      {
        type: String,
        requried: [false],
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
