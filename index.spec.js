const Metodos = require('./index');
const assert    = require('chai').assert;
const expect    = require('chai').expect;
const should = require('chai').should();

console.info(Metodos)


describe('Operaciones Matemáticas', () => {
    const metodo = new Metodos(15, 5);
  
    describe('Suma con un resultado esperado', () => {
      it('Suma de 2 numberos igual a 20', () => {
        const sum = metodo.suma.value;
        assert.equal(sum, 20);
      })
  
    })
  
    describe('Resta de dos números con un resultado esperado', () => {
      it('Resta de dos números es igual a 10', () => {
        const res = operation.resta.value;
        expect(res).to.equal(10);
      })
    })
  
  })