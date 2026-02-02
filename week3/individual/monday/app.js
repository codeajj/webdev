const express = require("express");
const app = express();

const {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
} = require("./feedbackHandlers"); 

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /feedback
app.get("/", getAllFeedbacks);

// POST /feedback
app.post("/", createFeedback);

// GET /feedback/:feedbackId
app.get("/:feedbackId", getFeedbackById);

// PUT /feedback/:feedbackId
app.put("/:feedbackId", updateFeedback);

// DELETE /feedback/:feedbackId
app.delete("/:feedbackId", deleteFeedback);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});