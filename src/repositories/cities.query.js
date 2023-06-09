import db from "../database/database.connetion.js";

export async function insertCity(city){
    return db.query(`INSERT INTO cities(name) VALUES ($1)`, [city])
    }

export async function getCity(){
    return db.query(`SELECT name FROM cities`)
    }
export async function getCityById(name){
    return db.query(`SELECT * FROM cities WHERE name = $1`,[name])
    }