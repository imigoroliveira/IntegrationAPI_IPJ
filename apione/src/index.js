import express from'express';
import cors from'cors';
import axios from'axios';
import swaggerUI from'swagger-ui-express';
import swaggerDocs from "./swagger.json";

const requests = axios.create({
  // Defina URL da sua API aqui
  baseURL: 'http://www.omdbapi.com',
  headers: { 'Content-Type': 'application/json' },
});
const router = express.Router();

const apikey = "ccd090fe";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use("/termos", (req, res) => {
  return res.json({
    message: "Termos de serviço",
  })
})

app.get('/movie/', async (req, res) => {
  const query = req.query;

  if (query.title) {
    return await requests.get(`/?t=${query.title}&apikey=${apikey}`)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(404).send(error.data);
      });
  }
  if (query.id) {
    return await requests.get(`/?i=${query.id}&apikey=ccd090fe`)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(404).send(error.data);
      });
  }
  res.send(400, { Response: "Sintaxe da requisição inválida"});
})

app.use(router);
app.listen(9001, () => console.log("O servidor está rodando na porta 9001"));
