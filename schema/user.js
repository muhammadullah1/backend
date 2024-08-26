const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      allowNull: true,
    },
    lastName: {
      type: String,
      allowNull: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    authSource: {
      type: String,
      enum: ["Normal", "Google", "Facebook"],
      default: "Normal",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    profile: {
      bio: String,
      profilePicture: String,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    stripeCustomerId: {
      type: String,
      allowNull: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    lastActive: {
      type: Date,
      allowNull: true,
    },
    termsAccepted: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
  return next();
});

exports.User = mongoose.model("User", userSchema, "users");
