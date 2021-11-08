const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hello World from initial mounted on shared volume, nodemon, env port, and using docker-compose w/ environment variable, multiple docker environements!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
