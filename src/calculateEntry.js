const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const childs = entrants.filter((entrant) => entrant.age < 18).length;
  const adults = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const seniors = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (entrants === [] || entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const people = countEntrants(entrants);
  const totalChild = (people.child * prices.child);
  const totalAdult = (people.adult * prices.adult);
  const totalSenior = (people.senior * prices.senior);
  return totalAdult + totalChild + totalSenior;
}

module.exports = { calculateEntry, countEntrants };
