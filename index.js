const express = require('express');

const comicsRouter = require('./Routers/comics');

const app = express();

process.loadEnvFiles();

const port = 3000;

app.use(express.json());

app.use('/comics' , comicsRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

