const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  if (!name || !info || !image || !price || !location) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newTour = Tour.addOne(name, info, image, price, location);
  res.status(201).json(newTour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);

  if (!tour) {
    return res.status(404).json({ error: "Tour not found" });
  }

  res.json(tour);
};

const updateTour = (req, res) => {
  const updatedTour = Tour.updateOne(req.params.tourId, req.body);

  if (!updatedTour) {
    return res.status(404).json({ error: "Tour not found" });
  }

  res.json(updatedTour);
};

const deleteTour = (req, res) => {
  const deletedTour = Tour.deleteOne(req.params.tourId);

  if (!deletedTour) {
    return res.status(404).json({ error: "Tour not found" });
  }

  res.json(deletedTour);
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};