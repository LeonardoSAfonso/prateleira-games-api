
 

<h1 align="center">
     Prateleira Games Api
</h1>

<h3 align="center">
    Projeto para CRUD de jogos e exibição em prateleira virtual, desenvolvido durante a aula de Tópicos Especiais.
</h3>

<h4 align="center">
	O frontend deste projeto pode ser encontrado no seguinte repositório https://github.com/Pazeto22/prateleira-games.
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto-)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Criando o Banco de Dados](#user-content--criando-o-banco-de-dados)
     * [Rodando o Backend](#user-content--rodando-o-backend)
   * [Tecnologias](#-tecnologias)
     * [Server](#user-content-server--nodejs----typescript)
   * [Autor](#-autor)
<!--te-->


## 🔵 Sobre o projeto 🔵

Api para cadastro de games desenvolvida como projeto para a disciplina de Topicos Especiais da Fatec Franca, este projeto é focado no backend.

---

## ⚙️ Funcionalidades

- [x] Cadastro de Jogos informando:
  - [x] nome
  - [x] plataforma
  - [x] horas jogadas
  - [x] url da capa do jogo 
- [x] Os usuários tem acesso as rotas de games, onde podem:
  - [x] Listar todos os games já cadastrados
  - [x] Procurar por um games especifico
  - [x] Atualizar as horas jogadas de um jogo
  - [x] Atualizar a informação de termino do jogo
  - [x] Deletar o cadastro de algum jogo

---

## Como executar o projeto

Para executar o projeto é preciso seguir alguns passos.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é necessário que possua uma ferramenta para testar serviços RESTful (Web APIs) por meio do envio de requisições HTTP como o [Postman](https://www.postman.com/downloads/) ou o [Insomnia](https://insomnia.rest/download)


#### ⚙️ Rodando o Backend

```bash

# Clone este repositório
$ git clone git@github.com:LeonardoSAfonso/EvaHortifruti.git

# Acesse a pasta do projeto no terminal/cmd
$ cd prateleira-games-api

# Edite o arquivo .env.example, pode utilizar qualquer editor de código ou ainda utilizar o bloco de notas.
$ Altere os campos 'PORT' e 'API_URL' para que fiquem conforme a disponibilidade de suas portas.
$ Altere o nome do arquivo para .env
```
![image](https://user-images.githubusercontent.com/50267081/122147021-7b74c600-ce2e-11eb-8ac6-185e6950de76.png)
``` bash
# Em seu terminal/cmd instale as dependências
$ yarn install

# Em seu terminal/cmd build o projeto
$ yarn build

# Execute as migrations do projeto
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn start

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

#### Utilizando a API

Para utilizar a API Prateleira Games basta inicir um novo projeto sua ferramenta de teste de API e adicionar a URL padrão definida no arquivo .env. 
Para efetuar as operações disponíveis siga os passos abaixo.

##### Cadastro de Jogo 

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /game a sua URL padrão
# Selecione o método POST e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"name": "String",
	"platform": "String",
	"played_hours": Number,
  "img_url": "String",
}

# Envie a requisição
# A API lhe retornará o nome, plataforma, horas jogadas, a url da imagem e id do jogo já registrado assim como as datas de criação e alteração deste cadastro.
```
![image](https://user-images.githubusercontent.com/50267081/122147409-38ffb900-ce2f-11eb-8b8c-b4cf25db54ff.png)

##### Listagem de Jogos

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /games URL padrão
# Selecione o método GET
# Envie a requisição
# A API lhe retornará o id, nome, plataforma, horas jogadas, URL da imagen, data da criação e a data da ultima alteração dos jogos.
``` 

![image](https://user-images.githubusercontent.com/50267081/122147892-1de17900-ce30-11eb-8473-03e166eef383.png)

##### Listar um produto

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /game/id-do-game-que-deseja-excluir URL padrão.
# Selecione o método GET
# Envie a requisição
# A API lhe retornará o iid, nome, plataforma, horas jogadas, URL da imagen, data da criação e a data da ultima alteração do jogo informado na url.
``` 
![image](https://user-images.githubusercontent.com/50267081/122148313-ac55fa80-ce30-11eb-9582-367931993064.png)

##### Atualização de Horas Jogadas

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /game/hours URL padrão
# Selecione o método PUT e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"id": Number
	"played_hours": Number
}
# Envie a requisição
# A API lhe retornará o iid, nome, plataforma, horas jogadas, URL da imagen, data da criação e a data da ultima alteração do jogo informado na url.
``` 
![image](https://user-images.githubusercontent.com/50267081/122148513-ffc84880-ce30-11eb-8c6b-3a4475545387.png)

##### Atualização de Finalização do jogo

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /finish-game URL padrão
# Selecione o método PUT e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"id": Number
	"finished": Number (1 para concluido e 0 para não concluido)
}
# Envie a requisição
# A API lhe retornará a confirmação da conclusão do jogo.
``` 
![image](https://user-images.githubusercontent.com/50267081/122148664-4322b700-ce31-11eb-9674-43775c1c1dea.png)

##### Exclusão de Jogo

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /game/id-do-game-que-deseja-excluir a sua URL padrão.
# Envie a requisição
# A API lhe retornará a confirmação de exclusão do jogo.

```
![image](https://user-images.githubusercontent.com/50267081/122147626-a4e22180-ce2f-11eb-97d9-326ef8fe9481.png)

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

####**Server**  ([NodeJS](https://nodejs.org/en/)  +  [JavaScript](https://www.javascript.com/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Typeorm](https://typeorm.io/#/)**
-   **[SQLite](https://www.sqlite.org/index.html)**


> Veja o arquivo  [package.json](https://github.com/LeonardoSAfonso/prateleira-games-api/blob/main/package.json)
> Veja a api online no Heroku atraves do link [Api Online](https://prateleira-games.herokuapp.com/)

#### **Utilitários**

-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

---

## Autor

[Leonardo Afonso](https://github.com/LeonardoSAfonso)
 
[![outlook Badge](https://img.shields.io/badge/-leonardo.s_afonso@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leonardo.s_afonso@hotmail.com)](mailto:leonardo.s_afonso@hotmail.com)

---
