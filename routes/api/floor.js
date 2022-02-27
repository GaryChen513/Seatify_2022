const router = require("express").Router();
const floorCtl = require("../../controllers/floor");

const {
    findAll,
    update,
    findByLevel
} = floorCtl;

router.route("/")
    .get(findAll)
    .get(findByLevel);

router.route("/:id")
    .post(update);

module.exports = router;