# QA TDD Mocha JavaScript

## Desafio Técnico TDD/BDD

### 1. Quais são as duas regras principais do TDD?

As duas regras principais do TDD são:
- Escrever um teste antes de escrever o código funcional, ou seja, não escrevemos código de produção até ter escrito um teste que falhe (e ele falhará justamente porque a funcionalidade ainda não foi implementada).
- Escrever apenas o código necessário para que o teste passse, ou seja, você não deve escrever mais do que o necessário e não compilar é falhar.

### 2. Com base nas duas regras do TDD, qual é a ordem correta para a execução das tarefas durante o ciclo de desenvolvimento no TDD?

1°: Escrever um teste que falha (Red)

2°: Escrever o mínimo de código necessário para que o teste passe (Green)

3°: Refatorar o código de modo que a qualidade melhore, mas o comportamento permaneça o mesmo (Refactor)

<div style="text-align:center">
  <img src="imagens/bdd.drawio.png" alt="Esquemático do BDD" />
</div>

### 3. Quais são as três leis do TDD?

- Não escrever código de produção antes de escrever um teste que falhará, uma vez que o desenvolvimento sempre se inicia com um teste.
- Não escrever mais código de teste do que o necessário para falhar.
- Não escrever mais código de produção do que o necessário para que o teste passe, evitando funcionalidades extras.
