const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("Here is our short history");
    } else {
        res.end(`
            <h1>Oops</h1>
            <p>I'm sorry, I can't do that.</p>
            <a href="/">Go home loser!</a>
        `)
    }
})

server.listen(5000);