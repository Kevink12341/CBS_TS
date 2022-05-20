var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const import_cbs_xml = () => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(cbs_links.metadata, requestOptions)
        .then((response) => response.text())
        .then((text) => { return xml_text_parser(text); });
});
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