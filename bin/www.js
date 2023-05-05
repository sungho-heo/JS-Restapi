import dbReset from "./sync-database.js";
import app from "../src/app.js";

const port = 3000;



app.listen(port, () => {
    console.log(`✅ http://localhost:${port}/`);

    dbReset().then(() => {
        console.log("Database sync");
    });
});
