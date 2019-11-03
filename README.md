# DesafioKinghost

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Business Description

Buscar na API da [Marvel](https://developer.marvel.com/docs) os seus 3 her�is favoritos e a partir deles listar 5 hist�rias nas quais eles apare�am.

- Na tela [Home](http://localhost:4200/) o usuario informa os dados de acesso ao a API da Marvel. Caso n�o tenha acesso utilizar:
    - Public Key: 2639acddd5aa8e4ef572cb0e57d11fd2
    - Private Key: 45018b3d5fba590578695bf787c760467947f6fd
- Ap�s informado os dados de acesso, o usuario ser� redirecionado para o link de [Her�is](http://localhost:4200/herois);
- O usuario deve selecionar o checkbox de seuas 3 her�is favoritos, onde ap�s seleciona-los ser� liberado o bot�o pesquisar;
- Ap�s clicar no bot�o ***Pesquisar*** o usuario ser� redirecionado para o link [Hist�rias](http://localhost:4200/historias), onde conter� o resultado.

## Development server

- Execute `ng serve` para iniciar o servidor dev;
- Navegue para `http://localhost:4200/`;

## Build

* Execute `ng build` para criar o projeto; 
* Os artefatos de constru��o ser�o armazenados no diret�rio `dist /`. 
* Use o sinalizador `--prod` para uma constru��o de produ��o.

## Running unit tests

* Execute o `ng test` para executar os testes de unitarios via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* Execute `ng e2e` para executar os testes de ponta a ponta via [Protractor](http://www.protractortest.org/).
