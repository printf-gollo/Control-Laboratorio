import { pool } from "./db";

const probarOperacionesDB = async () => {
  try {
    console.log("--- PROBANDO OPERACIONES EN LA BD ---");

    // alta
    const nombreRolPrueba = `Rol_${Date.now()}`; // hacer un nombre unico
    const [insertResult]: any = await pool.query(
      "INSERT INTO ROL (nombre) VALUES (?)",
      [nombreRolPrueba],
    );
    console.log(
      `¡Alta exitosa! Rol insertado con ID: ${insertResult.insertId}`,
    );

    // consulta
    const [rows]: any = await pool.query("SELECT * FROM ROL WHERE id_rol = ?", [
      insertResult.insertId,
    ]);
    console.log("Consulta exitosa. Datos recuperados de la BD:", rows[0]);
  } catch (error) {
    console.error("Error al realizar operaciones en la base de datos:", error);
  } finally {
    await pool.end();
  }
};

probarOperacionesDB();
