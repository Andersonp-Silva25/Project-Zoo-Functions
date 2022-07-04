const data = require('../data/zoo_data');

const { species } = data;

const includeNameTrue = (options) => {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  const { sex, sorted } = options;
  species.forEach(({ name, residents, location }) => {
    const objAnimals = {};
    let verifySex;
    if (sex) {
      verifySex = residents.filter((resident) => sex === resident.sex)
        .map((resident) => resident.name);
    } else {
      verifySex = residents.map((resident) => resident.name);
    }
    objAnimals[name] = verifySex;
    if (sorted) objAnimals[name].sort();
    obj[location].push(objAnimals);
  });
  return obj;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    const obj = { NE: [], NW: [], SE: [], SW: [] };
    species.forEach(({ location, name }) => obj[location].push(name));
    return obj;
  }
  if (options.includeNames) return includeNameTrue(options);
}

module.exports = getAnimalMap;
