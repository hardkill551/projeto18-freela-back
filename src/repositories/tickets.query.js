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
export async function getTicket(citya, cityd) {
  return db.query(`SELECT tickets.*, companies.name FROM tickets JOIN companies ON tickets.company = companies.id WHERE "cityAr" = $1 AND "cityDe" = $2`, [citya, cityd]);
}
export async function getTicketsByName(citya,cityd,price,timeDe,timeAr,company) {
  return db.query(`SELECT * FROM tickets WHERE "cityAr" = $1 AND "cityDe" = $2 AND price = $3 AND "timeDe" = $4 AND "timeAr" = $5 AND company = $6`, [citya,cityd,price,timeDe,timeAr,company]);
}
export async function getTicketById(id) {
  return db.query(`SELECT tickets.*, cities.name AS "cityDeName", c.name AS "cityArName", companies.name as "companyName" FROM tickets JOIN cities ON cities.id = tickets."cityDe" JOIN cities c ON c.id = tickets."cityAr" JOIN companies ON companies.id = tickets.company WHERE tickets.id = $1`, [id]);
}
export async function getPhotosTickets() {
  return db.query(`SELECT * FROM photoTickets;`);
}
