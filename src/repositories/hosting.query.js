import db from "../database/database.connetion.js";

export async function insertHosting(
  name,
  description,
  price,
  breakfast,
  parking,
  city,
  airConditioning,
  pool
) {
  return db.query(
    `INSERT INTO hosting(name, description, price, breakfast, parking, city, "airConditioning", pool) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [name, description, price, breakfast, parking, city, airConditioning, pool]
  );
}

export async function insertPhoto(photo, hostingId) {
  return db.query(`INSERT INTO photos(photo, "hostingId") VALUES ($1, $2)`, [
    photo,
    hostingId,
  ]);
}
export async function getHosting(id) {
  return db.query(`SELECT * FROM hosting WHERE hosting.city = $1`, [id]);
}
export async function getHostingByName(name) {
  return db.query(`SELECT * FROM hosting WHERE name = $1`, [name]);
}
export async function getHostingById(id) {
  return db.query(`SELECT hosting.*, cities.name AS "cityName"  FROM hosting JOIN cities ON cities.id = hosting.city WHERE hosting.id = $1`, [id]);
}
export async function getPhotos() {
  return db.query(`SELECT * FROM photos;`);
}
