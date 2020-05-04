<img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67">

# desafio-database-upload
![](https://img.shields.io/badge/NPM-6.13.4-red)
![](https://img.shields.io/badge/Node-0.2.24green)
![](https://img.shields.io/badge/Jest-25.3.0-yellow)
![](https://img.shields.io/badge/Express-4.17.3-blue)
![](https://img.shields.io/badge/Typeorm-0.2.24-black)

Esse projeto foi feito durante o bootcamp da [Rocketseat💜](https://rocketseat.com.br).

## Proposta

- Criar um sistema back-end que consiga importar arquivos csv
- armazenar as informações desse arquivo no banco de dados
- calcular o income e outcome, não deixando o outcome ser maior do que o total.

## Como usar

Antes de começar faça um clone desse repositório no seu computador:
> git clone https://github.com/adilier/desafio-database-upload.git

Entre na pasta do projeto e instale as dependência usando o comando:
#### Yarn
> yarn 
#### NPM
> npm install

Depois que instalar as dependênciar é necessário gerar as migrations para criar as tabelas no banco:
#### Yarn
> yarn typeorm migration:run 
#### NPM
> npm typeorm migration:run

Agora que ja fez tudo rode o projeto usando o comando:
#### Yarn
> yarn dev:server
#### NPM
> npm dev:server

## Observações

- Se quiser ter uma experiência melhor recomendo instalar o [Insomnia](https://insomnia.rest/download/), Se nunca usou essa ferramenta a rocketseat tem um [Vídeo explicando como usar](https://www.youtube.com/watch?v=3tB0uDliS6Y).  
- No arquivo ormconfig.json, coloque as informações necessárias para conectar com o seu banco de dados

## Rotas
Listar as transações do banco: GET
> http://localhost:3333/transactions

Criar uma transação: POST
> http://localhost:3333/transactions

**⚠Informações necessárias no body**
- title: string
- value: number
- type: 'income' | 'outcome'
- category: string

Deletar uma transação: DELETE
> http://localhost:3333/transactions/:id

Enviar um arquivo csv: POST
> http://localhost:3333/transactions/import

**⚠Informações necessárias no body**
- O body deve estar como multipart
- Enviar o arquivo como file

