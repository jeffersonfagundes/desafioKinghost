# DesafioKinghost

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Business Description

Buscar na API da [Marvel](https://developer.marvel.com/docs) os seus 3 heróis favoritos e a partir deles listar 5 histórias nas quais eles apareçam.

- Na tela [Home](http://localhost:4200/) o usuario informa os dados de acesso ao a API da Marvel. Caso não tenha acesso utilizar:
    - Public Key: 2639acddd5aa8e4ef572cb0e57d11fd2
    - Private Key: 45018b3d5fba590578695bf787c760467947f6fd
- Após informado os dados de acesso, o usuario será redirecionado para o link de [Heróis](http://localhost:4200/herois);
- O usuario deve selecionar o checkbox de seuas 3 heróis favoritos, onde após seleciona-los será liberado o botão pesquisar;
- Após clicar no botão ***Pesquisar*** o usuario será redirecionado para o link [Histórias](http://localhost:4200/historias), onde conterá o resultado.

## Install environment

- Instalar [NPM](https://www.npmjs.com); versão utilizada 6.12.0
- Instalar Angular CLI
  - $ npm install -g @angular/cli
- Instalar Buid Angular
  - $ npm install --save-dev @angular-devkit/build-angular

## Development server

- Execute `ng serve` para iniciar o servidor dev;
- Navegue para `http://localhost:4200/`;

## Build

* Execute `ng build` para criar o projeto; 
* Os artefatos de construção serão armazenados no diretório `dist /`. 
* Use o sinalizador `--prod` para uma construção de produção.

## Running unit tests

* Execute o `ng test` para executar os testes de unitarios via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

* Execute `ng e2e` para executar os testes de ponta a ponta via [Protractor](http://www.protractortest.org/).
