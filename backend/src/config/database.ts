import { Pool } from "pg";

const pool = new Pool({
  user: "dev",
  host: "localhost",
  database: "localhost",
  password: "secret",
  port: 5432,
});

export default pool;
