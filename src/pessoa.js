class Pessoa {
  ehMaiorDeIdade(idade) {
    if (idade < 0) {
        throw new Error('A idade não pode ser negativa');
    }

    if (typeof idade !== 'number') {
      throw new Error('A idade deve ser um número');
    }

    return idade >= 18;

  }
}

module.exports = Pessoa;