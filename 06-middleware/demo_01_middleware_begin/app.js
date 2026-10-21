import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);

app.use('/', (req, res, next) => {
  console.log("I'm here, too!!")
  res.send("lol no html for you")
  next()
})

app.use('/', (req, res, next) => {
  console.log("I'm here!")
  next()
})


app.use(express.static(path.join(__dirname, 'public')));
export default app;
