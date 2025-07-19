const { Pool } = require("pg")
const pool = require("../database/")

async function getClassifcations() {
    return await pool.query("Select * FROM public.classification ORDER BY classfication_name")
}

module.exports = {getClassifcations}

/* ***************************
 *  Get all classification data
 * ************************** */



/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */

async function getInventoryByClassificationId(classification_id) {

    try {
        const data = await pool.query (
            `SELECT * FROM public.inventory AS i
            JOIN public.classification AS c
            ON i.classification_id = c.classification_id
            WHERE i.classification_id = $1 `,
            [classification_id]
        )
        return data.rows
    } catch (error) {
        console.log("getClassificationbyid error" + id)
    
    }
    
}

module.exports = {getInventoryByClassificationId, getInventoryByClassificationId}