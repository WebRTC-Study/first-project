const { Server } = require("socket.io");
const express = require("express");
const app = express();
const compression = require("compression");
const cors = require("cors");
const bodyParser = require("body-parser");
const { resolve } = require("path");

const Logger = require("./Logger");
const log = new Logger("server");

const route = require("./routes/router.js");

let io, server, port;

port = process.env.PORT || 3000;

server = require("http").createServer(app);
io = new Server({
    maxHttpBufferSize: 1e7,
    transports: ["websocket"],
}).listen(server);

// directory
const dir = {
    public: resolve(__dirname, "../public"),
};

let channels = {};
let sockets = {};
let peers = {};

app.set("view engine", "ejs");

app.use(route);
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.static(dir.public));
app.use(bodyParser.urlencoded({ extended: true })); // Need for Slack API body parser

server.listen(port, () => {
    log.debug(`%c SIGN-SERVER started...`);
});
