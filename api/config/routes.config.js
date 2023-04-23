const express = require("express");
const router = express.Router();
const activities = require("../controllers/activities.controllers");
const users = require("../controllers/users.controllers");
const reviews = require("../controllers/reviews.controllers");
const likes = require("../controllers/likes.controllers");

const secure = require("../middlewares/secure.mid");
const usersMid = require("../middlewares/users.mid");
const reviewsMid = require("../middlewares/reviews.mid");
const isAdmin = require(".") //TODO


router.get("/activities", activities.list);
router.post("/activities", secure.auth, isAdmin, activities.create)
router.get("/activities/:id", activities.detail);


router.post("/activities/:id/review",secure.auth, reviews.create);
router.patch("/activities/:id/review/:reviewId",secure.auth,reviewsMid.exists,reviewsMid.checkAuthor,reviews.update);
router.delete("/activities/:id/review/:reviewId",secure.auth,reviewsMid.exists,reviewsMid.checkAuthor,reviews.delete);

router.post("/users", users.create);
router.get("/users/:id", secure.auth, usersMid.exists, users.detail);
router.patch("/users/:id", secure.auth, users.update);
router.delete("/users/:id", secure.auth, users.delete);
router.get("/users/:id/confirm", usersMid.exists, users.confirm);
router.post("/login", users.login);
// router.post("/signin", users.signin);
router.post("/users/:id/like",secure.auth, usersMid.exists,likes.toggle);

module.exports = router;