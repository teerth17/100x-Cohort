const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User } = require("../../04-mongo-with-jwt-auth/db");
const router = Router();
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  console.log("Created");
  res.json({
    message: "Admin created Successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.username;

  const userValidated = await User.find({
    username,
    password,
  });
  if (userValidated) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Wrong username/password",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const newCourse = await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => {
    res.json(courses);
  });
});

module.exports = router;
