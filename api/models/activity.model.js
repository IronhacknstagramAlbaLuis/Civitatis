const mongoose = require("mongoose");
const { isValidUrl } = require("../../utils/validations");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    nameactivity: {
      type: String,
    },
    destiny: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    details: {
      type: String,
    },
    pics: {
      type: String,
      required: "Project image url is required",
      validate: {
        validator: isValidUrl,
        message: "Not a valid url",
      },
 
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "User is required",
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  },
)
activitySchema .virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "activity", 
});
activitySchema .virtual("like", {
  ref: "Like",
  localField: "_id",
  foreignField: "activity", 
  justOne: false,
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;


