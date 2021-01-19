//const express = require('express')
import express from 'express';
const app = express();
import { registerRoutes } from './routes';

registerRoutes(app);
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello rld!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})