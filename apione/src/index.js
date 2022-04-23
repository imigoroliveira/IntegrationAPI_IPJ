const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => { res.send('Hello World!'); });

app.use(router);
app.listen(9001);
