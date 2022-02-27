const mongoose = require("mongoose");
const db = require("../models");
const floorSchema = require("../models/floor.js");
// const level = require("./seed");
const _ = require("lodash");

const table_size = 128; // default number of table is 128;
const num_of_table_per_floor = 32;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seatifyDB", {
  useNewUrlParser: true,
});

function getNeighbors(id) {
  const res = [];
  const left = id - 1;
  const right = id + 1;

  if (Math.floor(left / 4) == Math.floor(id / 4)) res.push(left);
  if (Math.floor(right / 4) == Math.floor(id / 4)) res.push(right);

  return res;
}

async function seed() {
  await db.Floor.deleteMany({});
  await db.Seat.deleteMany({});

  const num_of_floor = table_size / num_of_table_per_floor;

  for (let level = 0; level < num_of_floor; level++) {
    const aFloor = new db.Floor({ floor_level: level + 1 });

    for (let i = 0; i < num_of_table_per_floor; i++) {
      const table_num = level * num_of_table_per_floor + i;
      const aSeat = new db.Seat({ table_num: table_num, occupiedTime: [] });

      aFloor.seats.push(aSeat);
      aSeat.save();
    }
    aFloor.save();
  
  }
}

seed();
