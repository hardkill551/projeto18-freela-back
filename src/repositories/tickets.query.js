import db from "../database/database.connetion.js";

export async function insertTickets(citya,cityd,price,timeDe,timeAr,company) {
  return db.query(`INSERT INTO tickets("cityAr", "cityDe", price, "timeDe", "timeAr", company) VALUES ($1, $2, $3, $4, $5, $6)`,[citya,cityd,price,timeDe,timeAr,company]
  );
}

export async function insertPhotoTickets(photo, ticketsId) {
  return db.query(`INSERT INTO photoTickets(photo, "ticketsId") VALUES ($1, $2)`, [
    photo,
    ticketsId,
  ]);
}
export async function getHosting(id) {
  return db.query(`SELECT * FROM hosting WHERE hosting.city = $1`, [id]);
}
export async function getTicketsByName(citya,cityd,price,timeDe,timeAr,company) {
  return db.query(`SELECT * FROM tickets WHERE "cityAr" = $1 AND "cityDe" = $2 AND price = $3 AND "timeDe" = $4 AND "timeAr" = $5 AND company = $6`, [citya,cityd,price,timeDe,timeAr,company]);
}
export async function getHostingById(id) {
  return db.query(`SELECT * FROM hosting WHERE id = $1`, [id]);
}
export async function getPhotos() {
  return db.query(`SELECT * FROM photos;`);
}
