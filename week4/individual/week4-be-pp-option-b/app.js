const express = require("express");
const morgan = require('morgan');
const app = express();

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

// Middleware to parse JSON
app.use(express.json());
app.use(morgan('tiny'));

// ROUTES
app.use("/tours", tourRouter);
app.use("/users", userRouter);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});