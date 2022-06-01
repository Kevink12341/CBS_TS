import { Connections } from "../DB_architecture/DB_connection.js"

export const fill_Odata_Into_CBS_Tables = (OdataTableInfo:any) => {
    let valueArr = Object.values(OdataTableInfo)
    let valueStr = ""

    for (let i=0; i<valueArr.length; i++){
        let individualStr = ""
        individualStr = "\"" + valueArr[i] + "\""
        valueStr += individualStr + ","
    }
    let valueStrFormatted =  valueStr.slice(0,(valueStr.length-1))
    let sqlStr = `INSERT INTO cbs_tables (${Object.keys(OdataTableInfo)}) VALUES(${valueStrFormatted})`
    Connections.DBconn.query(sqlStr, function(err,result){
        if (err) throw (err)
        else console.log("CBS_tables has been updated")
    })
}