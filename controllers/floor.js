const { Floor, Seat } = require("../models");

class FloorCtl {
    findAll(req, res) {
        Floor.find(req.query)
            .populate({path: "seats", model: Seat })
            .then((data) => res.json(data))
            .catch((err) => res.statu(422).json(err));
    }

    findByLevel(req, res) {
        Floor.findOne({ floor_level : req.query.level })
            .then((data) => res.json(data))
            .catch((err) => res.status(422).json(err));
    }

    update(req, res) {
        Floor.findOneAndUpdate({ _id: req.param.id }, req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(422).json(err));
    }
}

module.exports =  new FloorCtl();