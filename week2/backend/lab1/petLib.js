let petArray = [];

function getAll() {
    return petArray;
}

let nextId = 1;

function addOne(name, species, age, color, weight) {

    if (!name || !species || !age || !color || !weight) {
        return false;
    }

    const newPet = {
        id: nextId++,
        name,
        species,
        age,
        color,
        weight
    };
    petArray.push(newPet);
    return newPet;
}

function findById(id) {
    const cb=(item) => item.id == id
    const pet = petArray.find((item) => item.id == id);
    if (pet) {
        return pet;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const pet = findById(id);
  if (pet) {
    if (updatedData.name) {
      pet.name = updatedData.name;
    }
    if (updatedData.species) {
      pet.species = updatedData.species;
    }
    if (updatedData.age) {
      pet.age = updatedData.age;
    }
    if (updatedData.color) {
      pet.color = updatedData.color;
    }
    if (updatedData.weight) {
      pet.weight = updatedData.weight;
    }
    return pet;
  }
  return false;
}

function deleteOneById(id) {
    const pet = findById(id);

    if (pet) {
        const initialLength = petArray.length;
        petArray = petArray.filter((pet) => pet.id != id)
        return petArray.length < initialLength;
    }
    return false;
}

/* //
if (require.main === module) {
    let result = addOne("Hilma", "Cat", 15, "White", 7)
    console.log("Result", result)
    console.log("Update Hilma", updateOneById(1, {age: 16}));
    console.log("Delete Hilma's record", deleteOneById(1))
    console.log("Try to find Hilma", findById(1))
}
*/

Pet = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Pet;