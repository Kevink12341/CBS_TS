import { import_data } from "../Fetch_data/Fetch_data.js"
import { Connections } from "../DB_architecture/DB_connection.js"
import { lookup_Tablename_In_DB } from "./tablename_helper.js"
import { write_Row }  from "./Write_row.js"

type dataset = Array<data>

interface data {
    id?: number
    [x:string]: any
}
interface setup_data {
    state: CBSInputState,
    tablenameObject: dataobject
}
type dataobject = {
    CBSdatabase: string,
    tableName: string,
    updateIdentifier: string
}

// 0 means table has been freshly generated and data is being generated
// 1 means data has an update
// 2 means data is up to date
type CBSInputState = 0 | 1 | 2

export const setup_Table_Data = async (input:Partial<setup_data>) => {
    // input is an object comprised of 2 values
    // first value is state with 3 possible numbers 0,1,2
    // 0 means table has been freshly generated and data is being generated
    // 1 means data has an update
    // 2 means data is up to date
    // the second value of input is the tableData parsed for the tablename

// first write to data
    let data: dataset = await import_data();
    let tablename = input.tablenameObject.tableName

    if (input.state == 0){
        write_Row(data, tablename)
        console.log("Data written to table")
    }
    else if (input.state== 1){
        let sqlStr = `DELETE FROM ${tablename}`
        Connections.DBconn.query(sqlStr,function(err,result){
            if (err) throw(err);
        })
        write_Row(data, tablename)
        console.log("Data updated")
    }
    else if (input.state ==2){
        console.log("data is up to date")
    }
}