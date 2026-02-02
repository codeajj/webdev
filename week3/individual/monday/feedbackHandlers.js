
const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating, platform } = req.body;

  if (!sender || !message || rating === undefined || !platform) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newFeedback = Feedback.addOne(
    sender,
    message,
    rating,
    platform
  );

  res.status(201).json(newFeedback);
};

const getFeedbackById = (req, res) => {
  const feedback = Feedback.findById(req.params.feedbackId);

  if (!feedback) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.json(feedback);
};

const updateFeedback = (req, res) => {
  const updatedFeedback = Feedback.updateOne(
    req.params.feedbackId,
    req.body
  );

  if (!updatedFeedback) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.json(updatedFeedback);
};

const deleteFeedback = (req, res) => {
  const deletedFeedback = Feedback.deleteOne(
    req.params.feedbackId
  );

  if (!deletedFeedback) {
    return res.status(404).json({ error: "Feedback not found" });
  }

  res.json(deletedFeedback);
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};