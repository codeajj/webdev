const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

router.get("/", getAllTours);
router.post("/", createTour);

router.use(auth);

router.get("/:tourId", getTourById);
router.put("/:tourId", updateTour);
router.delete("/:tourId", deleteTour);

module.exports = router;