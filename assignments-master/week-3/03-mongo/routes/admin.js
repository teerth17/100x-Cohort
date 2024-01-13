const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const mongoose = require("mongoose");
const { Admin, Course } = require("../db");

// Admin Routes
// app.use(bodyParser.json());

router.post("/signup", (req, res) => {
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  console.log("Created");
  res.json({
    message: "Admin created Successfully",
  });
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
// const PORT = process.env.PORT || 3000;
// router.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
