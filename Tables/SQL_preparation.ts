import {create_Table} from "./Checks_and_table_creations.js"

interface cbsdata {
  CBSdatabase: string,  
  tableName:  string,
  updateIdentifier: string,
}

const IDtypes = {
    "Edm.Int64": "INT(64)", 
    "Edm.String": "VARCHAR(255)",
    "Edm.Double": "DOUBLE" ,
    "Edm.Int32": "INT(32)",
    "Edm.Boolean": "BOOLEAN"
};

export const create_db_variables = (xml_input:any) => {
  // base name for the to be created table
  let cbsTableName = xml_input.name.tableid;
  let tabledata = xml_input.name.tableid.substring(0,xml_input.name.tableid.indexOf("NED")) +"NED"
  let updateIdentifier = xml_input.name.tableid.substring(xml_input.name.tableid.lastIndexOf("NED")+3)

  let cbsTabledata:cbsdata = {
    CBSdatabase: cbsTableName,
    tableName: tabledata,
    updateIdentifier: updateIdentifier,
  }

  // names for each column for the to be created table
  let column_names = [];
  for (let i=0; i<xml_input.properties.length;i++){
    column_names.push(xml_input.properties[i].name)
  }
  
  // identifier for types for each column not specified for SQL yet
  let column_types = []
  for (let i=0;i<xml_input.properties.length;i++){
    column_types.push(xml_input.properties[i].type)
  }

  // specifies the SQL types for each of the columns
  let column_sql_types = [];
  for (let i=0;i<column_types.length;i++){
    switch (String(column_types[i])) {
      case "Edm.Int64":
        column_sql_types.push(IDtypes["Edm.Int32"])
        break;
      case "Edm.String":
        column_sql_types.push(IDtypes["Edm.String"])
        break;
      case "Edm.Double":
        column_sql_types.push(IDtypes["Edm.Double"])
        break;
      case "Edm.Int32":
        column_sql_types.push(IDtypes["Edm.Int32"])
        break;
      case "Edm.Boolean":
        column_sql_types.push(IDtypes["Edm.Boolean"])
        break;
      default:
        console.log("Data Type not found")
    }
  }

  // SQL string construction comprised of previously made arrays and data
  let column_string = ""

  for (let i=0; i<column_sql_types.length;i++){
    column_string += column_sql_types[i] + ' ' + column_sql_types[i]
    if (i < column_types.length -1){
      column_string += ","
    }
  }

  let sql_create_db = `CREATE TABLE ${cbsTabledata.tableName} (${column_string})`;  

  create_Table(cbsTabledata, sql_create_db)
}