import mysql from "mysql";
import { databasename } from "./random_input.js";
const MysqlCredentials = {
    host: "localhost",
    user: "root",
    password: "Futuris123!!",
    port: 3306,
};
export const createDBConnection = mysql.createConnection(MysqlCredentials);
try {
    createDBConnection.connect();
}
catch (e) {
    console.error("DATABASE CONNECTION FAILED!", e);
}
export const database = {
    // databasename is a temporary string imported from random_inputs
    database: databasename
};
const fullMySQLCredentials = Object.assign({}, MysqlCredentials, database);
export const DBConnection = mysql.createConnection(fullMySQLCredentials);
export class Connections {
    static CreateDB = createDBConnection;
    static DBconn = DBConnection;
}
//# sourceMappingURL=DB_connection.js.map