import { Connections } from "./DB_connection.js";
import { databasename } from "./random_input.js";

let sqlString:string = `CREATE DATABASE ${databasename}`; 

// Uses the CreateDB connection, then closes it to re-open it with the database specified in the credentials.

export const create_DB = async () => {
    let DBpromise =  new Promise((resolve, reject)=> {
        Connections.CreateDB.query(sqlString, (err, result) =>{
            if (err) {
                if (err.errno==1007 || err.errno == 4007) { 
                    // Ubuntu desktop SQL err code 1007 = ER_DB_CREATE_EXISTS 
                    // Windows desktop SQL err code 4007 = ER_DB_CREATE_EXISTS
                    resolve(console.log(`${databasename} already exists`))
                    Connections.CreateDB.end()
                }
                else if (err) { reject(console.error("Something else went wrong", err))
                Connections.CreateDB.end() }
            }
            if (result){
            resolve(console.log(`${databasename} has been successfully made`))
            Connections.CreateDB.end()
            }
        })
    })
    return DBpromise
}
