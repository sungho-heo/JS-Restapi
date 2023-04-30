const express = require("express");

const port = 3000;

const app = express()

let users = [
    {
        id: 1,
        name: "Joy"
    },
    {
        id: 2,
        name: "Bob"
    },
    {
        id: 3,
        name: "James",
    },
    {
        id: 4,
        name: "god",
    },
]

app.get("/", (req, res) => {
    res.send("Hello world!")
})
app.get("/users", (req, res) => res.json(users));
const handleAppListen = () => console.log(`✅ http://localhost:${port}/`)

app.listen(port, handleAppListen);
