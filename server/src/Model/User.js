const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");
const User = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    historyChat: { type: Array, default: [] },
    accessToken: { type: Array, require: true, default: [] },
    refreshToken: { type: Array, require: true, default: [] },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", User);
