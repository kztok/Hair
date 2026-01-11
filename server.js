import { createServer } from 'node:http';
import { readFile } from "node:fs/promises";

// const hostname = '127.0.0.1';
const hostname = 'localhost';
const port = 3000;

const server = createServer(async (req, res) =>{
    try {
        if (req.url === "/" || req.url === "/index.html") {
            const html = await readFile("./index.html", "utf8");
            res.writeHead(200, {"Content-Type": "text/html"});
            return res.end(html);
        }

        if (req.url === "/about") {
            const html = await readFile("./about.html", "utf8");
            res.writeHead(200, {"Content-Type": "text/html"});
            return res.end(html);
        }

        if (req.url === "/styles.css") {
            const css = await readFile("./styles.css", "utf8");
            res.writeHead(200, {"Content-Type": "text/css"});
            return res.end(css);
        }

        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("Page Not Found");
    } catch (err) {
        res.writeHead(500);
        res.end("Server Error")
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});