import express from 'express'
import {promises as fs} from 'fs'
const app = express()


app.get('/', async (req, res) => {
    console.log("request to '/', sending back html")
    res.type('html')
    let fileContents = await fs.readFile('index.html')
    res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
    console.log("request to '/style.css', sending back css")
    res.type('css')
    let fileContents = await fs.readFile('style.css')
    res.send(fileContents)
})


app.get('/hello_world', async (req, res) => {
    let fileContents = await fs.readFile('./text.txt')
    res.send("Hello text: " + fileContents);
})






app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})