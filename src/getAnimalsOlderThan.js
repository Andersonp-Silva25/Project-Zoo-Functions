const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((specie) => specie.name === animal);
  const [residents] = animals;
  const animalAges = residents.residents;
  return animalAges.every((animalAge) => animalAge.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
