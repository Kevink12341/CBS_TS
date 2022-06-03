import { import_data } from "../Fetch_data/Fetch_data.js";
import { Connections } from "../DB_architecture/DB_connection.js";
export const setup_Table_Data = async () => {
    // first write to data
    let data = await import_data();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let keys = Object.keys(data[i]);
        let query = "";
        let updates = [];
        let values = [];
        keys.forEach((key) => {
            updates.push(` '${key}' = '${data[i][key]}' `);
            values.push(Connections.DBconn.escape(data[i][key]));
        });
        // console.log(`UPDATE table SET ${updates.join(",")} WHERE Id = ${data[i]["Id"]}`)
        console.log(`INSERT INTO table (${keys.join(",")}) VALUES (${values.join(",")})`);
    }
    // differentiate between update
};
//# sourceMappingURL=Data_setup.js.map