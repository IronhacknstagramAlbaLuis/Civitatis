const User = require("../models/user.model");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports.cleanBody = (req, res, next) => {
  // protect some body fields from being sent

  if (req.body) {
    delete req.body._id;
    delete req.body.author;
    delete req.body.createdAt;
    delete req.body.updatedAt;
    delete req.body.confirm;
  }

  next();
};

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")?.[1]; // "Bearer TOKEN"

  if (!token) {
    return next(createError(401, "Missing access token"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.sub)
    User.findById(decoded.sub)
      .then((user) => {
        if (user) {
          req.user = user;
          next();
        } else {
          next(createError(401, "user not found"));
        }
      })
      .catch(next);
  } catch (err) {
    next(createError(401, err));
  }
};

module.exports.isAdmin = (req, res, next) => {
    if (req.user?.admin) {
      next()
    } else {
      next(createError(403, 'Forbidden'))
    }
  }
  module.exports.isOwner = (req, res, next) => {
    if (req.user.id === req.params.id) {
      next()
    } else {
      next(createError(403, 'Forbidden'))
    }
  }

