import fetch, { Headers } from 'node-fetch';
import { cbs_links } from './Links_and_cleaning.js';
import { xml_text_parser } from './Parse_XML_inputs.js';
var myHeaders = new Headers();
myHeaders.append("Accept", "text");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
};
export const import_cbs_xml = async (valueCheck) => {
    if (valueCheck == true) {
        return fetch(cbs_links.metadata, requestOptions)
            .then((response) => response.text())
            .then((text) => { return xml_text_parser(text); });
    }
    else
        console.error("cbs_tables or db creation went wrong");
};
export const import_data = () => {
    return fetch(cbs_links.observations).then((response) => {
        return response.json().then((json) => {
            let data = json.value;
            return data;
        });
    }).catch((error) => {
        console.error("Couldnt fetch recource", error);
    });
};
//# sourceMappingURL=Fetch_data.js.map