export const xml_text_parser = (input) => {
    let splitText = input.split(">");
    let dataset_xml = [];
    for (let i = 0; i < splitText.length; i++) {
        if (String(splitText[i]).includes("Cbs.Ccb.MemModels")) {
            dataset_xml.push(splitText[i]);
            if (splitText[i] == dataset_xml[0]) {
                for (let j = 1; j < 20; j++) {
                    dataset_xml.push(splitText[i + j]);
                }
            }
            else
                break;
        }
        else
            continue;
    }
    // code die onnodige data eruit haalt
    for (let i = 0; i < dataset_xml.length; i++) {
        if (String(dataset_xml[i]).includes("PropertyRef")) {
            dataset_xml.splice(i, 1);
        }
        else
            break;
    }
    // code die de overflow na de data eruit haalt
    for (let i = 0; i < dataset_xml.length; i++) {
        if (String(dataset_xml[i]).includes("/EntityType")) {
            dataset_xml.splice(i, 20);
        }
    }
    let entitytypeArr = [];
    for (let i = 0; i < dataset_xml.length; i++) {
        if (dataset_xml[i].startsWith("<EntityType")) {
            let tableArr = String(dataset_xml[i]).split(" ");
            let entityId = tableArr[1].replace(/\"/g, "").replace("Name=", "").trim();
            let database_name = {
                tableid: entityId
            };
            entitytypeArr.push(database_name);
        }
    }
    ;
    let propertiesArr = [];
    for (let i = 0; i < dataset_xml.length; i++) {
        if (dataset_xml[i].startsWith("<Property ") && dataset_xml[i].endsWith("\/")) {
            let line = dataset_xml[i].replace("  ", " ");
            let lineArr = line.split(" ");
            let type = lineArr[2].replace(/\"/g, "").replace("Type=", "").trim();
            let name = lineArr[1].replace(/\"/g, '').replace("Name=", "").trim();
            let property = {
                name: name,
                type: type
            };
            propertiesArr.push(property);
        }
        else {
            continue;
        }
    }
    let CBSModel = {
        name: entitytypeArr[0],
        properties: propertiesArr
    };
    return CBSModel;
};
//# sourceMappingURL=Parse_XML_inputs.js.map