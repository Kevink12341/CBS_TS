import { check_if_table_exists } from "./SQL_create_table.js"
import { create_odata_table } from "./SQL_create_table.js"
import { fill_Odata_Into_CBS_Tables } from "./SQL_fill_cbs_tables.js"
import { CBS_tables_updateidentifier_check } from "./Odata_update.js"

export const create_Table = async (tableData:any,createDB:any) => {
    let checkvalue = await check_if_table_exists(tableData) 
    let table_Setup_done = new Promise((resolve,reject) => {
            if (checkvalue == "0") {
                create_odata_table(createDB)
                fill_Odata_Into_CBS_Tables(tableData)
                resolve(tableData)
            } 
            else CBS_tables_updateidentifier_check(tableData)
    })
}