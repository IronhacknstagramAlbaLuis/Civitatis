const User = require("../models/user.model");
const createError = require("http-errors");
const mailer = require("../config/mailer.config");
const jwt = require("jsonwebtoken");

const userConfirmationRequired = process.env.USER_CONFIRMATION_REQUIRED === "true";

// module.exports.list = (req, res, next) => {
//   User.find() // TODO: filters
//     .then((users) => res.json(users))
//     .catch(next);
// };

module.exports.create = (req, res, next) => {

  User.create(req.body)

    .then((user) => {
      if (userConfirmationRequired) {
        mailer.sendConfirmationEmail(user);
      }
      res.status(201).json(user);
    })
    .catch(next);
};


module.exports.detail = (req, res, next) =>{ 
  User.findById(req.params.id)
  .then((user) => { res.status(200).json(user)})
}
  


module.exports.delete = (req, res, next) => {

  User.deleteOne({ _id: req.user.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(createError(403, "Forbidden"));
  }

  Object.assign(req.user, req.body);

  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
// User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true}) 
// .then((user) => res.status(200).json(user))
// .catch(next)


};

module.exports.confirm = (req, res, next) => {
  req.user.confirm = true;

  req.user
    .save()
    .then(() => res.redirect(`${process.env.WEB_URL}/login`))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return next(createError(401, { errors: { password: 'Invalid credentials' }}));
      }
      if (!user.confirm) {
        return next(createError(401, { errors: { username: 'Please confirm your account' } }));
      }

      user.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, { errors: { password: 'Invalid credentials' } }));
        }
        const token = jwt.sign(
          { sub: user.id, exp: Date.now() / 1000 + 3_600 },
          process.env.JWT_SECRET
        );

        res.json({ token, ...user.toJSON() });
      });
    })
    .catch(next);
};