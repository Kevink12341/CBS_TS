interface link_formatting {
    metadata: string,
    observations: string,
}

/* Still to be split up into further functions
-- links have to moved to front-end eventually
-- parsing for base links to feed the fetch function(xml and json) for data input
-- sanitation and confirmity towards the CBS standards
-- figure out what belongs where long term
*/

class links {
static cbs_link = "https://opendata.cbs.nl/ODataApi/odata/70072ned/UntypedDataSet?$filter=((substringof(%27NL%27,RegioS)))&$select=Perioden,+TotaleBevolking_1";
static cbs_link2 = "https://odata4.cbs.nl/CBS/83878NED";
static cbs_link4 = "https://odata4.cbs.nl/CBS/84296NED";
static cbs_link3 = "https://odata4.cbs.nl/CBS/83376NED";
static cbs_link_1 = links.cbs_link4+"/Observations";
static cbs_link_2 = links.cbs_link_1 +"/?$select=(Measure, Value)";
static cbs_link_3 = links.cbs_link_1 + "/?$top=250";
static cbs_link_4 = links.cbs_link4 + "/$metadata";
static db_data = "83878NED"
}

let baseurl:string = "https://odata4.cbs.nl/CBS/";
let url:string = ""
let cbs_ID:string = "";

function build_links(input:string) {
    if (input.startsWith(baseurl,0) == true) {
        let compareArray = input.split("/")
        for (let i = 0; i<compareArray.length; i++){
            if (compareArray[i].includes("NED") == true ){
                cbs_ID += compareArray[i]
            }
        }
        url = baseurl + cbs_ID
    } else {
        console.log("link is currently not valid")
    }
    return url
}

build_links(links.cbs_link_4)

export const cbs_links:link_formatting = {
    metadata: url + "/$metadata",
    observations: url + "/Observations",
}
