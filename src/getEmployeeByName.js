const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  function filtro(elemento) {
    return elemento.firstName.includes(employeeName) || elemento.lastName.includes(employeeName);
  }
  return employees.find(filtro);
}

module.exports = getEmployeeByName;
