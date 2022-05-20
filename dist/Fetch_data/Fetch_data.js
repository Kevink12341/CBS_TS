import fetch from 'node-fetch';
import { cbs_links } from './Links_and_cleaning.js';
import { xml_text_parser } from './Parse_XML_inputs.js';

var myHeaders = new Headers();
myHeaders.append("Accept", "text");
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
};
export const import_schema = () => {
    return fetch(cbs_links.metadata, requestOptions)
        .then((response) => response.text())
        .then((text) => { return xml_text_parser(text); });
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