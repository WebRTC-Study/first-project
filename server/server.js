const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const server = require("http").createServer(app);

app.use(cors());
app.use(route);
app.use(express.json());

server.listen(port, () => {
    console.debug(`Server Listen: ${port}`);
});
