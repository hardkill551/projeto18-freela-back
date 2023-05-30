import db from "../database/database.connetion.js";

export async function insertCompany(companies){
    return db.query(`INSERT INTO companies(name) VALUES ($1)`, [companies])
    }

export async function getCompany(){
    return db.query(`SELECT name FROM companies`)
    }
export async function getCompanyById(name){
    return db.query(`SELECT * FROM companies WHERE name = $1`,[name])
    }