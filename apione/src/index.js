const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const requests = axios.create({
  // Defina URL da sua API aqui
  baseURL: 'http://www.omdbapi.com',
  headers: { 'Content-Type': 'application/json' },
});

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', async (req, res) => {
  query = req.query;

  if (query.title) {
    return await requests.get(`/?t=${query.title}&apikey=ccd090fe`)
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
app.listen(9001);
