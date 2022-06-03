import { Connections } from "../DB_architecture/DB_connection.js"

interface xml {
    CBSdatabase: string,
    tableName: string,
    updateIdentifier: string
}

export const CBS_tables_updateidentifier_check = (XMLdata:Partial<xml>) => {

    let identifier = XMLdata.updateIdentifier
    
    let sqlStr = `SELECT updateIdentifier FROM cbs_tables WHERE CBSdatabase = '${XMLdata.CBSdatabase}'`;
    Connections.DBconn.query(sqlStr,function(err,result){
        if (err) throw (err);
        else {
            let filteredresult = result[0].updateIdentifier
            if (filteredresult == identifier) {
                console.log("Odata table does not need updating")
            } 
            else if (filteredresult != identifier) {
                // TODO pass this function to updater
                console.log("Odata table needs updating")
            }
            }
    })

}