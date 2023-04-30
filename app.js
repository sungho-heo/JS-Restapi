const express = require("express");

const port = 3000;

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world!")
})
const handleAppListen = () => console.log(`✅ http://localhost:${port}/`)

app.listen(port, handleAppListen);
