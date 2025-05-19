const pool = require("./conexion");

/* funciones para obtener datos del servidor y agregar datos de forma segura */

const obtenerRegistros = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const agregarRegistro = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log("Registro agregado");
};

/* funciones para modificar y eliminar registros */

const modificarRegistro = async (descripcion, id) => {
  const consulta = "UPDATE posts SET descripcion = $1 WHERE id = $2";
  const values = [descripcion, id];
  const result = await pool.query(consulta, values);
};

const eliminarRegistro = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
};

module.exports = {
  obtenerRegistros,
  agregarRegistro,
  modificarRegistro,
  eliminarRegistro,
};
