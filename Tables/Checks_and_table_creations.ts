import {check_if_table_exists} from "./SQL_create_table.js"

export const create_Table = async (tableData:any,createDB:any) => {
    console.log(tableData)
    console.log(createDB)
    let checkvalue = await check_if_table_exists(tableData) 
    if (checkvalue == "0") {
        console.log("Table needs to be created")
    } else console.log("Check if DB needs updating.")
}