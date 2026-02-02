
let tours = [];
let nextId = 1;

function getAll() {
  return tours;
}

function findById(id) {
  return tours.find(tour => tour.id === Number(id));
}

function addOne(name, info, image, price, location) {
  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    location,
  };

  tours.push(newTour);
  return newTour;
}

function updateOne(id, updatedData) {
  const tour = findById(id);
  if (!tour) return null;

  Object.assign(tour, updatedData);
  return tour;
}

function deleteOne(id) {
  const index = tours.findIndex(tour => tour.id === Number(id));
  if (index === -1) return null;

  return tours.splice(index, 1)[0];
}

// Seed a default tour so GET /tours returns at least one item
addOne(
  "7 Days Tour",
  "Join us for the Best of Helsinki!",
  "https://www.course-api.com/images/tours/tour-x.jpeg",
  "1,495",
  "Helsinki, Finland"
);

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
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland"
  );

  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
}