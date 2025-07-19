const invModel = require("../models/inventory-model")

const utilities = require("../utilities/")

const invCont = {}


/* ***************************
 *  Build inventory by classification view
 * ************************** */

invCont.buildClassificationId = async function (req, res, next) {
    const classification_id = req.params.classification_id
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const ClassName = data[0].classification_name
    res.render("./inventory/classification" , {
        title : ClassName + "vehicles" ,
        nav,
        grid,
    })
}

module.exports = invCont