require("dotenv").config(); // Carga la configuracion de variables de entorno

const { neon } = require("@neondatabase/serverless"); // Trae la instancia Neon

const express = require('express'); // Trae instacia de express
const app = express() // Configura Express
const port = 3000; // Define puerto
const sql = neon(process.env.DATABASE_URL); // Se crea la conexion con Neon

app.get('/', async (req, res) => {
  const result = await sql`SELECT version()`; // Se ejecuta la consulta SQL
  const { version } = result[0]; // Obtengo el resultado
  res.send('Hello World! :: ' + version)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})