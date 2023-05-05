import { sequelize } from "../src/models";


const dbReset = async () => {
    return await sequelize.sync({ force: true });
};


export default dbReset;

