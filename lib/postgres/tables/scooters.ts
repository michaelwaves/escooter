"use server"
import { db } from "../db"

const getAllScooters = async () => {
    const res = await db.manyOrNone(`SELECT * from scooters`)
    return res
}

export { getAllScooters }