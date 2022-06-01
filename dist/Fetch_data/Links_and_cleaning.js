/* Still to be split up into further functions
-- links have to moved to front-end eventually
-- parsing for base links to feed the fetch function(xml and json) for data input
-- sanitation and confirmity towards the CBS standards
-- figure out what belongs where long term
*/
class links {
}
// to bemoved to frontend at some point
links.cbs_link = "https://opendata.cbs.nl/ODataApi/odata/70072ned/UntypedDataSet?$filter=((substringof(%27NL%27,RegioS)))&$select=Perioden,+TotaleBevolking_1";
links.cbs_link2 = "https://odata4.cbs.nl/CBS/83878NED";
links.cbs_link4 = "https://odata4.cbs.nl/CBS/84296NED";
links.cbs_link3 = "https://odata4.cbs.nl/CBS/83376NED";
links.cbs_link_1 = links.cbs_link4 + "/Observations";
links.cbs_link_2 = links.cbs_link_1 + "/?$select=(Measure, Value)";
links.cbs_link_3 = links.cbs_link_1 + "/?$top=250";
links.cbs_link_4 = links.cbs_link4 + "/$metadata";
links.db_data = "83878NED";
let baseurl = "https://odata4.cbs.nl/CBS/";
let url = "";
let cbs_ID = "";
function build_links(input) {
    if (input.startsWith(baseurl, 0) == true) {
        let compareArray = input.split("/");
        for (let i = 0; i < compareArray.length; i++) {
            if (compareArray[i].includes("NED") == true) {
                cbs_ID += compareArray[i];
            }
        }
        url = baseurl + cbs_ID;
    }
    else {
        console.log("link is currently not valid");
    }
    return url;
}
build_links(links.cbs_link_4);
export const cbs_links = {
    metadata: url + "/$metadata",
    observations: url + "/Observations",
};
//# sourceMappingURL=Links_and_cleaning.js.map