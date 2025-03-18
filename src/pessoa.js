class Pessoa {
  ehMaiorDeIdade(idade) {
    if (typeof idade !== 'number') {
      throw new Error('A idade deve ser um número');
    }

    if (idade < 0) {
      throw new Error('A idade não pode ser negativa');
    }

    return idade >= 18;
  }
}

module.exports = Pessoa;