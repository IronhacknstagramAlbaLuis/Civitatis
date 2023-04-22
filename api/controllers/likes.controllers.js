const Like = require("../models/like.model");

module.exports.toggle = (req, res, next) => {
  const params = {
    activity: req.params.id
  };

  Like.findOne(params)
  .populate("user")
  .then((like) => {
    if (like) {
      return Like.deleteOne({ _id: like.id })
        .then(() => res.status(204).send())
    } else {
      return Like.create(params)
        .then((like) => res.json(like))
    }
  })
  .catch(next);
};