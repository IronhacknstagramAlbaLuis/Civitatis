const Activity = require("../models/activity.model");

module.exports.list = (req, res, next) => {
  Activity.find()
    .populate("reviews")
    .then((activities) => res.json(activities))
     .catch(next);
}

module.exports.create = (req, res, next) => {
  const {
    nameactivity,
    destiny,
    description,
    details,
    pics,
    price
} = req.body

const body = { nameactivity, destiny, description, details,pics, price, user: req.user.id }
  
  Activity.create(body)
    .then((activity) => res.status(201).json(activity))
    .catch(next);
 };

module.exports.detail = (req, res, next) => 
Activity.findById(req.params.id)
.then((activity) => res.status(200).json(activity))


module.exports.delete = (req, res, next) => {
  Activity.deleteOne({
     _id: req.params.id
    
    })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
Activity.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
.then((activity)=>res.status(200).json(activity))
.catch(next)
};

