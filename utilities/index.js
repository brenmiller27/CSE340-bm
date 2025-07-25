const invModel = require("../models/inventory-model")
const Util = {}


/* ************************
 * Constructs the nav HTML unordered list
 ************************** */

Util.getNav = async function( req, res, next) {
    let data = await invModel.getClassifications()
    let list = "<ul>"
    list += '<li><a href="/" title= "Home Page"> </a></li>'
    data.rows.forEach((row) => {
        list += "<li>"
        list +=
        'a href = "/inv/type' +
        row.classification_id +
        ' "title = See Our inventory"' +
        row.classfication_name +
        'vehicles">' +
        row.classfication_name
        "</a>"
        list += "</li>"
        return list
    })
}

module.exports = Util


/* **************************************
* Build the classification view HTML
* ************************************ */

Util.buildClassificationGrid = async function(data) {
    let grid
    if(data.length > 0) {
        grid = '<ul id="inv-display">'
        data.forEach(vehicle => {
            grid += '<li>'
            grid +='a href="../../inv/detail/'+ vehicle.inv_id
            + '"title="view' + vehicle.inv_make + ' ' + vehicle.inv_model
            + ' on CSE Motors" /></a>'
      grid += '<div class="namePrice">'
      grid += '<hr />'
      grid += '<h2>'
      grid += '<a href="../../inv/detail/' + vehicle.inv_id +'" title="View ' 
      + vehicle.inv_make + ' ' + vehicle.inv_model + ' details">' 
      + vehicle.inv_make + ' ' + vehicle.inv_model + '</a>'
      grid += '</h2>'
      grid += '<span>$' 
      + new Intl.NumberFormat('en-US').format(vehicle.inv_price) + '</span>'
      grid += '</div>'
      grid += '</li>'
    })
    grid += '</ul>'
  } else { 
    grid += '<p class="notice">Sorry, no matching vehicles could be found.</p>'
  }
  return grid
}
