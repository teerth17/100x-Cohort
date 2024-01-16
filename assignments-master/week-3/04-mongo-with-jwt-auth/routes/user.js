const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => {
    res.json(courses);
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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const user = await User.findOne({
    username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
