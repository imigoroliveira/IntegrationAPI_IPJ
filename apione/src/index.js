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

app.get('/', (req, res) => { res.send('Hello World!'); });

app.get('/movie/:title', async (req, res) => {
    title = req.params.title;
    await requests.get(`/?t=${title}&apikey=ccd090fe`).then(response => res.send(response.data));
})

app.use(router);
app.listen(9001);
