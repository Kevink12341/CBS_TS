import mysql from "mysql";
import { databasename } from "./random_input.js";
import dotenv from "dotenv";
const MysqlCredentials = {
    host: dotenv.config().parsed.host,
    user: dotenv.config().parsed.user,
    password: dotenv.config().parsed.password,
    port: parseInt(dotenv.config().parsed.port),
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