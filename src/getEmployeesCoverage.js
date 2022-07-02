const data = require('../data/zoo_data');

const { species, employees } = data;

const verifyParameter = (parameter) => {
  const verifyEmployee = Object.keys(parameter).join();
  const verifyValue = Object.values(parameter).join();
  if (verifyEmployee === 'name') {
    const person = employees
      .find(({ firstName, lastName }) => firstName === verifyValue || lastName === verifyValue);
    return person;
  }
  if (verifyEmployee === 'id') {
    const person = employees
      .find(({ id }) => id === verifyValue);
    return person;
  }
};

const parameterUndefined = () => {
  const employeeId = employees.filter((employee) => employee);
  const mapa = employeeId.map((employee) => {
    const animals = verifyParameter({ id: employee.id }).responsibleFor;
    const verifyAnimalId = species.filter(({ id }) => animals.includes(id));
    const animalName = verifyAnimalId.map((animal) => animal.name);
    const places = verifyAnimalId.map((animal) => animal.location);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animalName,
      locations: places,
    };
  });
  return mapa;
};

function getEmployeesCoverage(parameter) {
  if (parameter !== undefined) {
    if (verifyParameter(parameter) === undefined) throw new Error('Informações inválidas');
    const animals = verifyParameter(parameter).responsibleFor;
    const verifyAnimalId = species.filter(({ id }) => animals.includes(id));
    const animalName = verifyAnimalId.map((animal) => animal.name);
    const places = verifyAnimalId.map((animal) => animal.location);
    const obj = {
      id: verifyParameter(parameter).id,
      fullName: `${verifyParameter(parameter).firstName} ${verifyParameter(parameter).lastName}`,
      species: animalName,
      locations: places,
    };
    return obj;
  }
  return parameterUndefined();
}

module.exports = getEmployeesCoverage;
