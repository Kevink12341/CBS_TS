import { Connections } from "./DB_connection.js";
import { database } from "./DB_connection.js"

export const check_cbs_tables = async () => {
// This function first checks if cbs_tables exists
// If the table does not exist it calls create_cbs_tables() to create the table
    let database_name:string = database.database
    let sql_string_check_if_cbs_tables_exists:string = `SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = '${database_name}' AND table_name = 'cbs_tables')`

    Connections.DBconn.query(sql_string_check_if_cbs_tables_exists, function(err,result){
        if (err) throw (err);
        else if (result) {
            let cbs_tables_value =  Object.values(JSON.parse(JSON.stringify(result[0])))[0]
            if (cbs_tables_value == 0) 
                { create_cbs_tables()}
            else console.log("cbs_Tables already exists")
        }
    })
}
    
async function create_cbs_tables() {
// this function creats the CBS_tables table
// In this table the tablename and identifiers will be automatically written
    let sql_string = "CREATE TABLE cbs_tables (id INT AUTO_INCREMENT PRIMARY KEY, tableName VARCHAR(255), tableAlias VARCHAR(255), CBSdatabase VARCHAR(255), updateIdentifier VARCHAR(255))"
    let cbs_tables_promise = new Promise((resolve,reject)=>{
        Connections.DBconn.query(sql_string, function(err, result){
            if (err) reject(err);
            resolve(console.log("CBS_Tables has been created"))
        })
    })
    return cbs_tables_promise
}