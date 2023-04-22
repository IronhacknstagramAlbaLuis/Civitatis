const Review = require("../models/review.model.js");

module.exports.create = (req, res, next) => {
  Review.create({
    text: req.body.text,
    review: req.params.id,
    author: req.user.id,
  })
    .populate("activity")
    .populate("author")
    .then((review) => res.json(review))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.review, req.body);

  req.review
    .save()
    .then((review) => res.json(review))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Review.deleteOne({ _id: req.review.id })
    .then(() => res.status(204).send())
    .catch(next);
};