const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Ao receber o argumento count, deverá retornar a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento names, deverá retornar um array com o nome de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento averageAge, deverá retornar a média das idades dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento location, deverá retornar a localização dos elefantes no Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento popularity, deverá retornar a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it('Ao receber o argumento availability, deverá retornar um array com os dias possiveis para visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('Se não for passado nenhum parametro, a função deverá retornar undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('Se for passado {} como parametro, deverá retornar a string: Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
  it('Se for passado como parametro uma string que não possui uma funcionalidade, deverá null', () => {
    const actual = handlerElephants('Danoninho');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
