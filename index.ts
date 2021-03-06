import { create_DB } from "./DB_architecture/Create_database.js";
import { check_cbs_tables } from "./DB_architecture/Create_CBS_Tables.js"

// First the code generates a DB by running create_db from create_database.js should none exist.
create_DB();
// When it finds that the DB exists it creates CBS_Tables for the DB architecture.
check_cbs_tables();
