import { cbs_links } from "../Fetch_data/Links_and_cleaning.js";
export const lookup_Tablename_In_DB = () => {
    // need to import link data from somewhere to compare the cbs_tables to the link
    let link = cbs_links.observations;
    let linkSplit = link.split("/");
    let searchValue = "";
    for (let i = 0; i < linkSplit.length; i++) {
        if (linkSplit[i].includes("NED") == true) {
            searchValue += "O" + linkSplit[i];
        }
    }
    return searchValue;
};
//# sourceMappingURL=tablename_helper.js.map