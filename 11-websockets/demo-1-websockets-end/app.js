
import express from 'express'
import logger from 'morgan';
import path from 'path';
import url from 'url';

import { createServer } from 'node:http'
import { WebSocket, WebSocketServer } from 'ws'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
app.use(logger('dev'));
app.use(express.json());

const server = createServer(app)
const wss = new WebSocketServer({
    server,
    path: '/chatSocket',
})

wss.on('listening', ws => {
    console.log("listening websockets!");
})

wss.on('connection', ws => {
    console.log('someone connected!');

    ws.on('error', console.error);

    ws.on('message', (data) => {
        for (const client of wss.clients) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString())
            }
        }
    })
})

app.get('/api', (req, res) => {
    res.send("OK")
})

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})