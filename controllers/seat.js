const { Seat } = require("../models");

class SeatCtl {
  findById(req, res) {
    Seat.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  }

  findAll(req, res) {
    Seat.find(req.query)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  }

  update(req, res) {
    Seat.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.status(422).json(err));
  }
}

module.exports = new SeatCtl();
