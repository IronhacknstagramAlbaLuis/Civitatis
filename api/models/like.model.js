const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    activity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      required: "Like activity is required",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Like user is required",
    },
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
  }
);

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;