import { check_if_table_exists } from "./SQL_create_table.js";
import { create_odata_table } from "./SQL_create_table.js";
import { fill_Odata_Into_CBS_Tables } from "./SQL_fill_cbs_tables.js";
import { CBS_tables_updateidentifier_check } from "./Odata_update.js";
export const create_Table = async (tableData, createDB) => {
    let checkvalue = await check_if_table_exists(tableData);
    let table_Setup_done = new Promise((resolve, reject) => {
        if (checkvalue == "0") {
            create_odata_table(createDB);
            fill_Odata_Into_CBS_Tables(tableData);
            resolve(tableData);
        }
        else
            CBS_tables_updateidentifier_check(tableData);
    });
<<<<<<< HEAD
=======
    return table_Setup_done;
>>>>>>> 546767f8ead4d09434ba6a2a138953b7403ea7f0
};
//# sourceMappingURL=Checks_and_table_creations.js.map