import { Connections } from "./DB_connection.js";
import { databasename } from "./random_input.js";
let sqlString = `CREATE DATABASE ${databasename}`;
// Uses the CreateDB connection, then closes it to re-open it with the database specified in the credentials.
export const create_DB = () => {
    Connections.CreateDB.query(sqlString, (err, result) => {
        if (err) {
            if (err.errno == 1007 || err.errno == 4007) {
                // Ubuntu desktop SQL err code 1007 = ER_DB_CREATE_EXISTS 
                // Windows desktop SQL err code 4007 = ER_DB_CREATE_EXISTS
                console.log(`${databasename} already exists`);
                Connections.CreateDB.end();
            }
            else if (err) {
                console.error("Something else went wrong", err);
                Connections.CreateDB.end();
            }
        }
        if (result) {
            console.log(`${databasename} has been successfully made`);
            Connections.CreateDB.end();
        }
    });
};
//# sourceMappingURL=Create_database.js.map