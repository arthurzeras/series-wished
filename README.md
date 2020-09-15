# series-wished

Este é um projeto para controle de lista de desejo de séries de tv usando Vue.js, está sendo ministrado em meu canal do Youtube. O foco é em consumir uma API Rest e manter a sessão usando o token JWT.

## Tecnologias utilizadas:
  - [Node.js](https://nodejs.org)
  - [NPM](https://www.npmjs.com/)
  - [Vue CLI](https://cli.vuejs.org/)
  - [Vue.js](https://vuejs.org/)
  - [Vuex](https://vuex.vuejs.org/)
  - [Vue Router](https://router.vuejs.org/)
  - [Vue Resource](https://github.com/pagekit/vue-resource)


### Instalando as dependências e rodando o projeto:
```
npm install && npm run serve
```

## Integrando com a API

Seguindo um dos passos descritos abaixo você deve chegar a um endereço da API, pegue este endereço e o adicione no arquivo `src/http/index.js` na linha 9, substituindo o que está lá atualmente (é o mesmo da terceira opção abaixo).

Você tem três opções para integrar o projeto com a api que usamos no curso:
  - Rodando o projeto que está na pasta webserver em sua própria máquina; [(tutorial abaixo)](#rodando-a-api-em-sua-maquina)
  - Fazendo o deploy do mesmo projeto da pasta webserver no Heroku; [(tutorial abaixo)](#rodando-no-heroku)
  - Acessando a api que foi hospedada por mim no heroku através desta URL: [https://guarded-headland-11685.herokuapp.com]('https://guarded-headland-11685.herokuapp.com').

## Rodando a API em sua máquina

- Acesse a pasta webserver;
- Instale as dependências usando `npm i`
- Inicie o servidor local usando `npm run start`

## Fazendo deploy da API no heroku
- Acesse a pasta webserver;
- Renomeie o arquivo .env.example para .env
- Há um tutorial de como fazer o deploy no Heroku explicando passo a passo, recomendo que siga esse tutorial e o projeto irá rodar perfeitamente. [[Link para o tutorial]](https://appdividend.com/2018/04/14/how-to-deploy-nodejs-app-to-heroku/);
