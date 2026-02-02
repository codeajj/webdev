const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

// ROUTES
app.use("/tours", tourRouter);
app.use("/users", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});