const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const validator = require("validator");

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "You must provide a username"],
      unique: [true, "This username already exists"],
    },
    title: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address",
      },
    },
    role: {
      type: String,
      default: "admin",
    },
    profilePic: {
      public_id: { type: String },
      url: {
        type: String,
      },
    },
    password: {
      type: String,
      required: [true, "You must provide a password!"],
      select: false,
    },
  },
  { timestamps: true }
);

AdminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};
AdminSchema.pre("remove", async function (next) {
  await this.model("Post").deleteMany({ author: this._id });
});
let Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
