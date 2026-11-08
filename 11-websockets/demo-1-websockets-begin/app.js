
import express from 'express'
import logger from 'morgan';
import path from 'path';
import url from 'url';

import { createServer } from 'node:http'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(logger('dev'));
app.use(express.json());

const server = createServer(app)

app.get('/api', (req, res) => {
    res.send("OK")
})

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})