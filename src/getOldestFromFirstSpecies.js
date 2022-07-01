const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id);
  const firstSpecie = employeeId.responsibleFor.find((first) => first);
  const allAnimails = species.find((specie) => specie.id === firstSpecie).residents;
  const ages = allAnimails.map((count) => count.age);
  const animalOldest = ages.reduce((acc, curr) => (acc > curr ? acc : curr));
  return Object.values(allAnimails.find((animal) => animal.age === animalOldest));
}

module.exports = getOldestFromFirstSpecies;
