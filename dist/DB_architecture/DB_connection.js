import mysql from "mysql";
import { databasename } from "./random_input.js";
const MysqlCredentials = {
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
};
export const createDBConnection = mysql.createConnection(MysqlCredentials);
try {
    createDBConnection.connect();
}
catch (e) {
    console.error("DATABASE CONNECTION FAILED!", e);
}
const database = {
    // databasename is a temporary string imported from random_inputs
    database: databasename
};
const fullMySQLCredentials = Object.assign({}, MysqlCredentials, database);
export const DBConnection = mysql.createConnection(fullMySQLCredentials);
export class Connections {
}
Connections.CreateDB = createDBConnection;
Connections.DBconn = DBConnection;
//# sourceMappingURL=DB_connection.js.map