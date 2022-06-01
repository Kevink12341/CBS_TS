var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { check_if_table_exists } from "./SQL_create_table.js";
export const create_Table = (tableData, createDB) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(tableData);
    console.log(createDB);
    let checkvalue = yield check_if_table_exists(tableData);
    if (checkvalue == "0") {
        console.log("Table needs to be created");
    }
    else
        console.log("Check if DB needs updating.");
});
//# sourceMappingURL=Checks_and_table_creations.js.map