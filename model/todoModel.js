const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("todoSchema", todoSchema);
