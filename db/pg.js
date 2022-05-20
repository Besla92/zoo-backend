import pkg from "pg";
const { Pool } = pkg;

const connectionString = "postgres://swqgfuur:ka0JHQH7SX40VxRubu8pvC_JPA7AxY5C@tyke.db.elephantsql.com/swqgfuur";

const pool = new Pool({
	connectionString,
});
console.log(pool);

export default pool;