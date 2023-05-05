import express from "express";
import morgan from "morgan";
import router from "./api/users/index.js";



const app = express()

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //body-parser에서 body data use config.
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use("/users",router);

export default app
