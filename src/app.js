import express from "express";
import morgan from "morgan";
import router from "./api/users/index.js";
import {sequelize, User} from "./models.js";


const port = 3000;

const app = express()

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //body-parser에서 body data use config.
app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use("/users",router);
const handleAppListen = async () => {
    console.log(`✅ http://localhost:${port}/`);
    await sequelize.sync({ force: true }).then(() => {
        console.log("Databases sync");
    })
};


app.listen(port, handleAppListen);

export default app
