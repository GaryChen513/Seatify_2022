const mongoose = require("mongoose");
const seatSchema = require("./seat.js");

const { Schema } = mongoose;

const floorSchema = new Schema(
  {
    seats: [{ type: Schema.Types.ObjectId, ref: "seat" }],
    floor_level: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = floorSchema;
