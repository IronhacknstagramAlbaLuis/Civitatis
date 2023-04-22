const mongoose = require("mongoose");
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
  foreignField: "author", // TODO
  justOne: false,
});
activitySchema .virtual("like", {
  ref: "Like",
  localField: "_id",
  foreignField: "activity", // TODO
  justOne: false,
});

const Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;


