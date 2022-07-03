const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('Se não receber argumento, deverá retornar o objeto com os dias e horarios de funcionamento', () => {
    const actual = getOpeningHours();
    const expected = hours;
    expect(actual).toEqual(expected);
  });
  it('Se os parametros dia e hora forem Monday e 09:00-AM respectivamente, deverá retornar The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Se os parametros dia e hora forem Tuesday e 09:00-AM respectivamente, deverá retornar The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Se os parametors dia e hora forem Wednesday e 09:00-PM respectivamente, deverá retornar The zoo is closed', () => {
    const actual = getOpeningHours('Tuesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Se for inserido um dia invalido no parametro, devera retornar um erro', () => {
    expect(() => getOpeningHours('Mo', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Se for inserido uma abreviação invalida no parametro, devera retornar um erro', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Se for inserido uma hora invalida no parametro, devera retornar um erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Se for inserido minutos invalidos no parametro, devera retornar um erro', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
});
