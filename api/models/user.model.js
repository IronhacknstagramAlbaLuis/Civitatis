const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      minlength: [3, "Student name needs at least 3 chars"],
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: "Student email is required",
      match: [/^\S+@\S+\.\S+$/, "Student email must be valid"],
    },
    username: {
      type: String,
      required: "Username is required",
      minlength: [3, "Username needs at least 3 chars"],
      match: [/^[a-z0-9]+$/, "Username must be lowercase and without spaces"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Student password is required",
      minlength: [8, "Student password needs at least 8 chars"],
    },
    role: ["guest", "admin"]
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
)
userSchema.pre("save", function (next) {
  const user = this;
  user.admin = proces.env.ADMIN_ADMITED === user.email;

  if (user.isModified("password")) {
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("likes", {
  ref: "Likes",
  localField: "_id",
  foreignField: "activity", // TODO
  justOne: false,
});
userSchema.virtual("reviews", {
  ref: "Reviews",
  localField: "_id",
  foreignField: "activity", // TODO
  justOne: false,
});


const User = mongoose.model("User", userSchema);
module.exports = User;