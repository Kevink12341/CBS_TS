import { Connections } from "../DB_architecture/DB_connection.js"

export const check_if_table_exists = async (input:any) => {

    let cbsTable = input.tableName
    let doesCBSTableExist = `SELECT EXISTS (SELECT 1 FROM CBS_tables WHERE tableName = '${cbsTable}' )`
    let formattedresult = new Promise((resolve, reject)=> {
        Connections.DBconn.query(doesCBSTableExist, function(err,result){
            if (err) reject(err);
            resolve(Object.values(result[0]).toString())
    })
    })
    return formattedresult
}