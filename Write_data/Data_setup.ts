import { import_data } from "../Fetch_data/Fetch_data.js"
import { Connections } from "../DB_architecture/DB_connection.js"
import { lookup_Tablename_In_DB } from "./tablename_helper.js"

type dataset = Array<data>

interface data {
    id?: number
    [x:string]: any
}

export const setup_Table_Data = async  () => {
// first write to data
    let data: dataset = await import_data();
    let tablename = lookup_Tablename_In_DB();

    console.log(data)
    for (let i=0; i<data.length; i++){
        let keys = Object.keys(data[i]);
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
            console.log("Row added")
        })
    }



// differentiate between update
}