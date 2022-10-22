# Simple User Management API

API created for storing a list of users in incremental order.

- Note: this API has limitations. Right now, it returns all registered users, having no paging or limit.
- It has two endpoints (POST and GET). More info below.

## Utilized languages/techonologies:
<div align="center"}>
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" />
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/typescript.svg" />
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" />
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/knex-1.svg" />
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/git.svg" />
  <img align="center" height="70px" src="https://cdn.worldvectorlogo.com/logos/mysql-3.svg" />  
</div>

## Prerequisites:

To run the project you will need to have installed the following tools: Gitbash, Node.js, Typescript and VSCode(or similar IDE).

## How to run the project with Gitbash:

```bash
# Clone the repository:
$ git clone https://github.com/allan-gilber/selecao-estagio-spa-api.git

# Run gitbash on the folder that was created
$ cd ./selecao-estagio-spa-api

# Install the necessary dependencies with:
$ npm i

# Config your local variables in a .env file in the root directory of the project 
# so you can connect to your MYSQL database(more info below)
# After configuring the access, run the script to create and populate your DB:

$ npm run migration

# To start the project use the following command:

$ npm start

# The server will start on the configured port in the .env file or the default "3003".
```

## .ENV - IMPORTANT
Don't forget to config the local variables in a ".env" file located in the root folder of the project. Just create a new file named ".env" and insert the following text, substituting with your information:

```
DB_HOST = (link to your host)
DB_USER = (user)
DB_PASSWORD = (password)
DB_SCHEMA = (database/schema)
```

## API documentation

All information on how to use the API can be found <a href="https://documenter.getpostman.com/view/17593079/2s83zcSSJT" target="_blank">here</a>.
