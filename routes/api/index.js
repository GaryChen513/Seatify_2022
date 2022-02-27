const router = require("express").Router();
const floorRoutes = require("./floor.js");
const seatRoutes = require("./seat.js");

router.use("/floor", floorRoutes);
router.use("/seat", seatRoutes);

module.exports = router;