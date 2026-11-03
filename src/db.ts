import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "prestamos_db",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// probar la conexion al arrancar el servidor
export const testDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexion exitosa a la base de datos prestamos_db!");
    connection.release();
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
};
