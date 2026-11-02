import express from 'express';
const app = express();

/*
liveness check, just returning a string
*/
app.get('/hello', (req, res) => {
  // hello
  res.send("OK");
});