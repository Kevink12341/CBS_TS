import fetch,{RequestInit,Headers} from 'node-fetch';
import {cbs_links} from './Links_and_cleaning.js'
import {xml_text_parser} from './Parse_XML_inputs.js'

interface request {
    method: any,
    headers: any,
    redirect: any,
}

var myHeaders = new Headers();
myHeaders.append("Accept", "text")

var requestOptions:RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const import_cbs_xml = async () => {
    return fetch(cbs_links.metadata, requestOptions)
       .then((response:any) => response.text())
            .then( (text:any) => { return xml_text_parser(text); }
    )};

export const import_data = () => {    
    return fetch(cbs_links.observations).then((response:any) => { 
        return response.json().then((json: any) =>  {
            let data = json.value;
            return data;
        })
    }).catch((error: any) => {
    console.error("Couldnt fetch recource", error)
    });
};
