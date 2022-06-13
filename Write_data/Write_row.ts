import { Connections } from "../DB_architecture/DB_connection.js";
type dataset = Array<data>

interface data {
    id?: number
    [x:string]: any
}
export const write_Row = (data:dataset, tablename:string) => {
    for (let i=0; i<data.length; i++){
        let keys = Object.keys(data[0]);
        let updates : Array<string> = []
        let values : Array<any> = []
        keys.forEach((key) => {
            updates.push(` '${key}' = '${data[i][key]}' `)
            values.push(Connections.DBconn.escape(data[i][key]))
        })

        let query = `INSERT INTO ${tablename} (${keys.join(",")}) VALUES (${values.join(",")})`
        // console.log(`UPDATE table SET ${updates.join(",")} WHERE Id = ${data[i]["Id"]}`)
        Connections.DBconn.query(query, function(err,result){
            if (err) throw (err);
            console.log("Row added",i)
        })
    }
}