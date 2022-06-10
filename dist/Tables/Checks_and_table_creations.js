import { check_if_table_exists } from "./SQL_create_table.js";
import { create_odata_table } from "./SQL_create_table.js";
import { fill_Odata_Into_CBS_Tables } from "./SQL_fill_cbs_tables.js";
import { CBS_tables_updateidentifier_check } from "./Odata_update.js";
export const create_Table = async (tableData, createDB) => {
    let checkvalue = await check_if_table_exists(tableData);
    let table_Setup_done = new Promise(async (resolve, reject) => {
        if (checkvalue == "0") {
            create_odata_table(createDB);
            fill_Odata_Into_CBS_Tables(tableData);
            let resolvevalue = {
                state: 0,
                tablenameObject: tableData
            };
            resolve(resolvevalue);
        }
        else if (checkvalue == "1") {
            let resolvevalue = {
                state: await CBS_tables_updateidentifier_check(tableData),
                tablenameObject: tableData
            };
            resolve(resolvevalue);
        }
        else
            console.error("Something went wrong with writing data to the table");
    });
    return table_Setup_done;
};
//# sourceMappingURL=Checks_and_table_creations.js.map