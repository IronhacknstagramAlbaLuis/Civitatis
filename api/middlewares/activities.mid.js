const Activity = require("../models/activity.model")
const createError = require("http-errors")

module.exports.exists = (req, res, next) => {
  const activityId = req.params.id
  Activity.findById(activityId)
  .populate("reviews")
  .then((activity)=>{
    if(activity){
      req.activity = activity;
      next();
    } else {
      next(createError(404,"Activity not found"))
    }
  })
}
