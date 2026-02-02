const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    res.json(Feedback.getAll());
};

const createFeedback = (req, res) => {
    const {sender, message, rating, platfrom} = req.body
    const newFeedback = Feedback.addOne(sender, message, rating, platfrom)
    if (!newFeedback) {
        return res.status(500).json({ message: "Fail to create tour" });
    }
    return res.status(201).json(newFeedback)
};

const getFeedbackById = (req, res) => {
    const {id} = req.params
    const feedback = Feedback.getById(id)

    if (!feedback) {
        return res.status(404).json({message: "Feedback not found"})
    }
};

const updateFeedback = (req, res) => {
    res.json({ message: "Hello from updateFeedback" });
};

const deleteFeedback = (req, res) => {
    res.json({ message: "Hello from deleteFeedback" });
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};