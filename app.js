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

app.get("/users", (req, res) => res.json(users));
app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (!id) {
        return res.status(400).json({ error: "Incorrect id" });
    }
    let user = users.filter(user => user.id === id)[0];
    if (!user) {
        return res.status(404).json({ error: "Unknown user" });
    };
    return res.json(user);
});
app.get("/", (req, res) => {
    res.send("Hello world!")
})

const handleAppListen = () => console.log(`✅ http://localhost:${port}/`)

app.listen(port, handleAppListen);
