const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const server = http.createServer((req, res) => {

    //res.writeHead();

    if (req.url == "index.html" || req.url == "/") {
        fs.readFile("./index.html", (err, html) => { //index.html
            if (err) {
                res.writeHead(500);
            } else {
                res.write(html);
            }
            res.end();
        });
    } else if (req.url == "/css") { //style.css
        fs.readFile("./style.css", (err, css) => {
            if (err) {
                res.writeHead(500);
            } else {
                res.write(css);
            }
            res.end();
        });
    }

});

server.listen(8080, () => { //临时，部署时改 80/443
    console.log("Server up, listening port 8080. ");
});

