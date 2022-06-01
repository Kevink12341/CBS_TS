export const CBS_tables_updateidentifier_check = (XMLdata:any) => {
    console.log(XMLdata)
    let identifier:object = new Object(XMLdata)

    let data = {
        CBSdatabase: 'O84296NED202201280200',
        tableName: 'O84296NED',
        updateIdentifier: '202201280200'
      }
    console.log(data.updateIdentifier)
    
    console.log(
        identifier.propertyIsEnumerable("updateIdentifier"),
        identifier.hasOwnProperty("updateIdentifier")
        ,
        typeof(identifier),
        Object.values(identifier),
        Object.keys(identifier)[2]
    )
}