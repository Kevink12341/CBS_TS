import { Connections } from "../DB_architecture/DB_connection.js";
export const write_Row = (data, tablename) => {
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
};
//# sourceMappingURL=Write_row.js.map