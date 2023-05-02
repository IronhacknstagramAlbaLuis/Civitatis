const express = require("express");
const router = express.Router();
const activities = require("../controllers/activities.controllers");
const users = require("../controllers/users.controllers");
const reviews = require("../controllers/reviews.controllers");
const likes = require("../controllers/likes.controllers");

const secure = require("../middlewares/secure.mid");
const usersMid = require("../middlewares/users.mid");
const reviewsMid = require("../middlewares/reviews.mid");
const isAdmin = require("../middlewares/isadmin.mid") 

//endpoint for authentication
router.post("/login", users.login);

//endpoints for user
router.post("/users", users.create);
router.get("/users/:id",  usersMid.exists, users.detail);
router.patch("/users/:id", secure.auth,  users.update);
router.delete("/users/:id", secure.auth, secure.isOwner, users.delete);
router.get("/users/:id/confirm", usersMid.exists, users.confirm);
router.post("/users/:id/like",secure.auth, usersMid.exists,likes.toggle);

//endpoints for activities
router.get("/activities", activities.list);
router.post("/activities", secure.auth, activities.create)
router.get("/activities/:id", activities.detail)
router.delete("/activities/:id", secure.auth, secure.isOwner, activities.delete)
router.patch("/activities/:id", secure.auth, secure.isOwner, activities.update)

//endpoints for reviews
router.post("/reviews", secure.auth, reviews.create);
router.patch("/reviews/:id", reviewsMid.exists, secure.auth, reviewsMid.checkAuthor,reviews.update);
router.delete("/reviews/:id",secure.auth,reviewsMid.exists,reviewsMid.checkAuthor,reviews.delete);


module.exports = router;