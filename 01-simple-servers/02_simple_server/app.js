const express = require('express')
const app = express()
const PORT = 3000;

/*

localhost/something
http://localhost:3000/

*/


// app.get("/*blah", (req, res) => {
//     res.type("text/html")
//     res.status(404)
//     res.send("<h1>Error: Page '"+req.params.blah+"' doesn't exist</h1><p>Did you mean /?</p>")
// })

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get("/hello*noun", (req, res) => {
    res.send("You asked for: " + req.params.path)
})

// This is an error!! (used to work in older versions, not anymore)
// app.get('*', (req, res) => {
//     res.send("What happens here????")
// })



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}/`)
})

