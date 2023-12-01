import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Halycia19#mysql",
  database: "conecta",
});
