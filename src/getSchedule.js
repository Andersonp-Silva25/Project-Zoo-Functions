const data = require('../data/zoo_data');

const { species, hours } = data;

const verifyAnimal = (animal) => {
  const verifyType = species.find((specie) => specie.name === animal);
  return verifyType.availability;
};

const hoursDay = (day) => {
  if (hours[day].open === 0) return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

const availabilityAnimal = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species.filter((specie) => specie.availability.includes(day)).map((animal) => animal.name);
};

function getSchedule(scheduleTarget) {
  const availabilityDays = {};
  Object.keys(hours).forEach((day) => {
    availabilityDays[[day]] = {
      officeHour: hoursDay(day),
      exhibition: availabilityAnimal(day),
    };
  });
  const isAnimal = species.some((specie) => specie.name === scheduleTarget);
  const isDay = availabilityDays[scheduleTarget];
  if (isAnimal) return verifyAnimal(scheduleTarget);
  if (isDay) {
    const objDay = {};
    const verifyDay = Object.keys(hours).filter((day) => day === scheduleTarget).join();
    objDay[verifyDay] = availabilityDays[scheduleTarget];
    return objDay;
  }
  return availabilityDays;
}

module.exports = getSchedule;
