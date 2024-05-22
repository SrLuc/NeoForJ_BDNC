
# Projeto Node.js com Neo4j

Este é um projeto simples que utiliza Node.js e Neo4j para criar um CRUD através de uma nterface de Programação de Aplicação
 
## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o Neo4j instalados em sua máquina.

- NodeJs
- Neo4F

### Instalação

Clone este repositório em sua máquina local:

````
git clone https://github.com/SrLuc/NeoForJ_BDNC.git

````

Instale as dependências do projeto utilizando npm:

````
npm install

````

### Configuração do Neo4j

Certifique-se de que o Neo4j esteja em execução em sua máquina local. 

Por padrão, o projeto está configurado para se conectar ao Neo4j em bolt://localhost:7687 com o usuário **neo4j** e a senha **ROOT1234**. 

Se necessário, altere essas configurações no arquivo db.js.

### Executando o projeto

Após a instalação e a configuração do Neo4j, você pode iniciar o servidor com o seguinte comando:

````
npm run start

````

### Rotas da API

Para testar as rotas da API é nescessário utilizar um interface preparada para isso, como o POSTMAN, Insomnia ou uma extensão do VSCODE chamda Thunder Client

- GET/users Retorna todos os usuários cadastrados.
- POST /users: Cria um novo usuário.
Parâmetros: name (string), age (number).
- PUT /users/:name: Atualiza a idade de um usuário existente.
Parâmetros: name (string), age (number).
- DELETE /users/:name: Deleta um usuário pelo nome.
Parâmetros: name (string).


### Testando a conexão

Ao iniciar o servidor, uma conexão de teste é realizada automaticamente para garantir que o servidor esteja conectado ao Neo4j. Você deve ver a mensagem "Conexão bem-sucedida" no console se a conexão for estabelecida com sucesso.

Este README fornece uma visão geral da Atividade de Banco de Dados Não Convecionais, instruções de instalação, configuração e uso da API(CRUD)