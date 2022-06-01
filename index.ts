import { create_DB } from "./DB_architecture/Create_database.js";
import { check_cbs_tables } from "./DB_architecture/Create_CBS_Tables.js";
import { import_cbs_xml } from "./Fetch_data/Fetch_data.js";
import { create_db_variables } from "./Tables/SQL_preparation.js"

try {
// First the code generates a DB by running create_db from create_database.js should none exist.
create_DB().then(() => check_cbs_tables());
// When it finds that the DB exists it creates CBS_Tables for the DB architecture.
// Async get XML from CBS.nl
import_cbs_xml().then((xml) => { create_db_variables(xml) });

}
catch (error) {console.error(error)}
