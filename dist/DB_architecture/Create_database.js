import { Connections, createDBConnection } from "./DB_connection.js";
import { databasename } from "./random_input.js";
let sqlString = `CREATE DATABASE ${databasename}`;
export const create_DB = () => {
    Connections.CreateDB.query(sqlString, (err, result) => {
        if (err) {
            if (err.errno = 4007) {
                console.log(`${databasename} already exists`);
                createDBConnection.destroy();
            }
            else
                throw (err);
            createDBConnection.destroy();
        }
        if (result) {
            console.log(`${databasename} has been successfully made`);
            createDBConnection.destroy();
        }
    });
};
//# sourceMappingURL=Create_database.js.map