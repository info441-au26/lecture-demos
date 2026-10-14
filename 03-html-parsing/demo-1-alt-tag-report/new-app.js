import parser from 'node-html-parser';

let html = "<h1>Hi there</h1><p>We're all here and drinking coffee</p>"
console.log("Here's some html:")
console.log(html)

let htmlPage = parser.parse(html)

let h1s = htmlPage.querySelectorAll('h1')
console.log(h1s)

let google = await fetch("https://www.google.com")
console.log(await google.text());