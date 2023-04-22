const Activity = require("../models/activity.model");

module.exports.list = (req, res, next) => {
  Activity.find()
  .then((activities) => res.json(activities))
  .catch(next);
}

module.exports.detail = (req, res, next) => res.json(req.params.id);

