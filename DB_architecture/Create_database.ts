import { Connections, createDBConnection } from "./DB_connection.js";
import { databasename } from "./random_input.js";

let sqlString:string = `CREATE DATABASE ${databasename}`; 

export const create_DB = () => {
Connections.CreateDB.query(sqlString, (err, result) =>{
    if (err) {
        if (err.errno=4007) { 
            // SQL err code 4007 = ER_DB_CREATE_EXISTS
            console.log(`${databasename} already exists`)
            createDBConnection.destroy()
        }
        else throw (err)
        createDBConnection.destroy()
    }
    if (result){
    console.log(`${databasename} has been successfully made`)
    createDBConnection.destroy()
    }
})}
