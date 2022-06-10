import { import_data } from "../Fetch_data/Fetch_data.js";
import { Connections } from "../DB_architecture/DB_connection.js";
export const setup_Table_Data = async (input) => {
    // input is an object comprised of 2 values
    // first value is state with 3 possible numbers 0,1,2
    // 0 means table has been freshly generated and data is being generated
    // 1 means data has an update
    // 2 means data is up to date
    // the second value of input is the tableData parsed for the tablename
    // first write to data
    let data = await import_data();
    let tablename = input.tablenameObject.tableName;
    if (input.state == 0) {
        for (let i = 0; i < data.length; i++) {
            let keys = Object.keys(data[0]);
            let updates = [];
            let values = [];
            keys.forEach((key) => {
                updates.push(` '${key}' = '${data[i][key]}' `);
                values.push(Connections.DBconn.escape(data[i][key]));
            });
            let query = `INSERT INTO ${tablename} (${keys.join(",")}) VALUES (${values.join(",")})`;
            // console.log(`UPDATE table SET ${updates.join(",")} WHERE Id = ${data[i]["Id"]}`)
            Connections.DBconn.query(query, function (err, result) {
                if (err)
                    throw (err);
                console.log("Row added", i);
            });
        }
    }
    else if (input.state == 1) {
        console.log("update data");
    }
    else if (input.state == 2) {
        console.log("data is up to date");
    }
};
//# sourceMappingURL=Data_setup.js.map