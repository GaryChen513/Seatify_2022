const router = require("express").Router();
const seatCtl = require("../../controllers/seat");


const {
    findById,
    findAll,
    update
} = seatCtl;

router.route("/")
    .get(findAll)  

router.route("/:id")
    .get(findById)
    .post(update);

module.exports = router;