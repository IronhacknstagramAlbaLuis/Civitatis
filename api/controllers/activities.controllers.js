const Activity = require("../models/activity.model");
const User = require("../models/user.model");

module.exports.list = (req, res, next) => {
  Activity.find()
  .then((activities) => res.json(activities))
  .catch(next);
}

module.exports.create = (req, res, next) => {
 if (role === admin) {
  Activity.create(req.body)
    .then((activity) => res.status(201).json(activity))
    .catch(next);
 }
};

module.exports.detail = (req, res, next) => res.json(req.params.id)

module.exports.delete = (req, res, next) => {
  Activity.deleteOne({ _id: req.activity.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.activity, req.body);
  req.activity
    .save()
    .then((activity) => res.json(activity))
    .catch(next);
};
