const express = require("express");
const bodyParser = require("body-parser");
const { driver } = require("./db");
const app = express();
const port = 3000;
app.use(bodyParser.json());

async function testConnection() {
  const session = driver.session();

  try {
    const result = await session.run("RETURN 1");
    console.log("Conexão bem-sucedida", result.records[0].get(0));
  } catch (error) {
    console.error("Erro de conexão:", error);
  } finally {
    await session.close();
  }
}
testConnection();

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});


// Rota para criar um usuário
app.post("/users", async (req, res) => {
  const { name, age } = req.body;
  const session = driver.session();

  try {
    await session.run("CREATE (u:User {name: $name, age: $age}) RETURN u", {
      name,
      age,
    });
    res.status(201).send("Usuário criado");
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

// Rota para listar todos os usuários
app.get("/users", async (req, res) => {
  const session = driver.session();

  try {
    const result = await session.run("MATCH (u:User) RETURN u");
    res.send(result.records.map((record) => record.get(0).properties));
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

//Rota para deletar um usuário
app.delete("/users/:name", async (req, res) => {
  const { name } = req.params;
  const session = driver.session();

  try {
    await session.run("MATCH (u:User {name: $name}) DELETE u", { name });
    res.send("Usuário deletado");
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

// Rota para atualizar um usuário
app.put("/users/:name", async (req, res) => {
  const { name } = req.params;
  const { age } = req.body;
  const session = driver.session();

  try {
    await session.run("MATCH (u:User {name: $name}) SET u.age = $age", {
      name,
      age,
    });
    res.send("Usuário atualizado");
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

