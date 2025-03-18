const { expect } = require('chai');
const Pessoa = require('../src/pessoa');

describe('Teste de verificação de idade para consumo de bebida alcoólica', () => {

  let pessoa;

  beforeEach(() => {
    pessoa = new Pessoa();
  });

  it('deve retornar true para pessoas com 18 anos', () => {
    expect(pessoa.ehMaiorDeIdade(18)).to.be.true;
  });

  it('deve retornar true para pessoas com idade superior a 18 anos', () => {
    expect(pessoa.ehMaiorDeIdade(25)).to.be.true;
  });

  it('deve retornar false para pessoas com 17 anos', () => {
    expect(pessoa.ehMaiorDeIdade(17)).to.be.false;
  });

  it('deve retornar false para pessoas com idade inferior a 17 anos', () => {
    expect(pessoa.ehMaiorDeIdade(16)).to.be.false;
  });

  it('deve lançar um erro para idade não numérica', () => {
    expect(() => pessoa.ehMaiorDeIdade('abc')).to.throw('A idade deve ser um número');
  });

  it('deve lançar um erro para idade negativa', () => {
    expect(() => pessoa.ehMaiorDeIdade(-1)).to.throw('A idade não pode negativa');
  });

});