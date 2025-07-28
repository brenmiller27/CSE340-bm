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

Util.buildItemListing = async function (data) {
    let listingHtml = "";
    console.dir({data});
    if (data) {
        listingHtml = `
        <section class="car-listing">
            <img src= "${data.inv_image}" alt=""
            <div class = "car-info">
                <div>
                <h2?${data.inv_year} ${data.inv_make} </h2>
                </div>
            </div>
            <div>
                ${Number.parseFloat(data.inv_price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD}",
                })}
            </div>
            <div class="description">
                <p>
                ${data.inv_description}
                </p>
                <dl>
                    <dt>Mileage</dt>
                    <dd>${data.inv_miles.toLocaleString("en-US", {
                    style: "decimal",
                })}</dd>
                 <dt>Color</dt>
                <dd>${data.inv_color}</dd>
                <dt>Class</dt>
                <dd>${data.classfication_name}</dd>
                </dl>
            </div>
        </section>
        `;
    } else {
        listingHtml = `
        <p> Sorry, no matching vehicle data </p>`;
    }
    return listingHtml;
};

Util.buildClassificationList = async function (classification_id = null) {
    let data = await invModel.getClassifcations();
    let classificationList = 
    '<select name="classification_id" id="classlist" required>';
    classificationList += '<option value="' + row.classification_id + '"';
    if (
        classification_id !=null &&
        row.classification_id == classification_id
    )
    {
        classificationList += " selected ";
    }

    classificationList += ">" + row.classfication_name
}

/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */

Util.handleErrors = fn => (req, res , next) => Promise.resolve(fn(req,res, next)).catch(next)

module.exports = Util;