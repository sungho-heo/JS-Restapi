import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("node_api_rest", "root", "153123gj@#", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
});


export const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
    },
});

