import { Connections } from "../DB_architecture/DB_connection.js"

export const check_if_table_exists = async (input:any) => {

    let cbsTable = input.tableName
    let doesCBSTableExist = `SELECT EXISTS (SELECT 1 FROM cbs_tables WHERE tableName = '${cbsTable}' )`
    let formattedresult = new Promise((resolve, reject)=> {
        Connections.DBconn.query(doesCBSTableExist, function(err,result){
            if (err) reject(err);
            resolve(Object.values(result[0]).toString())
    })
    })
    return formattedresult
}

export const create_odata_table = async (formattedSQLStr:string) => {
    let odata_promise = new Promise((resolve,reject)=> {
        Connections.DBconn.query(formattedSQLStr, function(err,result){
            if (err) reject(err);
            resolve(console.log("Table has been created"))
        })
    })
    return odata_promise
}