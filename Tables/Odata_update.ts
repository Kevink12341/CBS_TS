import { Connections } from "../DB_architecture/DB_connection.js"

interface xml {
    CBSdatabase: string,
    tableName: string,
    updateIdentifier: string
}

export const CBS_tables_updateidentifier_check = (XMLdata:Partial<xml>) => {

    let identifier = XMLdata.updateIdentifier
    let update_identifier_promise = new Promise((resolve,reject)=> {

        let sqlStr = `SELECT updateIdentifier FROM cbs_tables WHERE CBSdatabase = '${XMLdata.CBSdatabase}'`;
        Connections.DBconn.query(sqlStr,function(err,result){
            if (err) reject(err);
            else {
                let filteredresult = result[0].updateIdentifier
                if (filteredresult == identifier) {
                    resolve(2)
                } 
                else if (filteredresult != identifier) {
                    resolve(1)
                }
            }
        })
    })
    return update_identifier_promise
}