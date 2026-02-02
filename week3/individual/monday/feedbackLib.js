let feedbacks = [];
let nextId = 1;

function getAll() {
  return feedbacks;
}

function findById(id) {
  return feedbacks.find(feedback => feedback.id === Number(id));
}

function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
  };

  feedbacks.push(newFeedback);
  return newFeedback;
}

function updateOne(id, updatedData) {
  const feedback = findById(id);
  if (!feedback) return null;

  Object.assign(feedback, updatedData);
  return feedback;
}

function deleteOne(id) {
  const index = feedbacks.findIndex(
    feedback => feedback.id === Number(id)
  );

  if (index === -1) return null;

  return feedbacks.splice(index, 1)[0];
}

module.exports = {
  getAll,
  findById,
  addOne,
  updateOne,
  deleteOne,
};

/* --------- simple test runner --------- */
if (require.main === module) {
  let result = addOne(
    "John Smith",
    "Great session on React components! I found the examples very helpful.",
    5,
    "mobile"
  );

  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
}