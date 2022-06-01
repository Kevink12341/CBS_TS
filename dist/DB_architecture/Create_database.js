var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Connections } from "./DB_connection.js";
import { databasename } from "./random_input.js";
let sqlString = `CREATE DATABASE ${databasename}`;
// Uses the CreateDB connection, then closes it to re-open it with the database specified in the credentials.
export const create_DB = () => __awaiter(void 0, void 0, void 0, function* () {
    let DBpromise = new Promise((resolve, reject) => {
        Connections.CreateDB.query(sqlString, (err, result) => {
            if (err) {
                if (err.errno == 1007 || err.errno == 4007) {
                    // Ubuntu desktop SQL err code 1007 = ER_DB_CREATE_EXISTS 
                    // Windows desktop SQL err code 4007 = ER_DB_CREATE_EXISTS
                    resolve(console.log(`${databasename} already exists`));
                    Connections.CreateDB.end();
                }
                else if (err) {
                    reject(console.error("Something else went wrong", err));
                    Connections.CreateDB.end();
                }
            }
            if (result) {
                resolve(console.log(`${databasename} has been successfully made`));
                Connections.CreateDB.end();
            }
        });
    });
    return DBpromise;
});
//# sourceMappingURL=Create_database.js.map