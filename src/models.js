import { Sequelize, DataTypes } from "sequelize";
import config from "../config/environment.js";

export const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password,
    { dialect: "mysql" }
);



export const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
    },
});



