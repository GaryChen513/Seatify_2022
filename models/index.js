const mongoose = require("mongoose");
const seatSchema = require("./seat.js");
const floorSchema = require("./floor.js");

const { model } = mongoose;

module.exports = {
    Floor: model("Floor", floorSchema),
    Seat: model("Seat", seatSchema), 
}
