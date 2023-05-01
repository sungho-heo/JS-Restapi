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

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //body-parser에서 body data use config.
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.get("/users", (req, res) => res.json(users))

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (!id) {
    return res.status(400).json({ error: "Incorrect id" })
  }
  let user = users.filter((user) => user.id === id)[0]
  if (!user) {
    return res.status(404).json({ error: "Unknown user" })
  }
  return res.json(user)
})

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (!id) {
    return res.status(400).json({ error: "Incorrect id" })
  }
  let userIdx = users.findIndex((userId) => userId.id === id)
  if (userIdx === -1) {
    return res.status(404).json({ error: "Unkwon user" })
  }
  users.splice(userIdx, 1)
  return res.status(204).send()
})

app.post("/users", (req, res) => {
    const name = req.body.name || "";
    if (!name.length) {
        return res.status(400).json({ error: "Plz Update user name" });
    } 
})
const handleAppListen = () => console.log(`✅ http://localhost:${port}/`)

app.listen(port, handleAppListen);
