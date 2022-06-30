const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(...animal) {
  const allSpecies = species.filter((specie) => specie).map(({ residents }) => residents.length);
  const animalNames = species.map(({ name }) => name);
  const joinArray = animalNames.map((animalName, index) => ({ [animalName]: allSpecies[index] }));

  if (animal.length === 0) return Object.assign(...joinArray);

  const parameters = Object.values(...animal);
  const speciesName = species.find((specie) => parameters.includes(specie.name));
  const speciesSex = speciesName.residents.filter((resident) => parameters.includes(resident.sex));

  if (parameters.includes('female') || parameters.includes('male')) return speciesSex.length;
  if (speciesName) return speciesName.residents.length;
}

module.exports = countAnimals;
