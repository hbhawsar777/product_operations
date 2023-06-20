const mongoose = require('mongoose');
exports.editProducts = editProducts;


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const inventorySchema = {
    productId : Number,
    quantity : Number
}

async function editProducts(req, res) {

    try {
        let body = req.body;
        let query = body.query;

        if(!query.length){
            return res.send("No Product to Update");
        }

        for(let i = 0; i<query.length ; i++) {

            // get product by the ID
            let productId = query['productId'];


            if(query[i].operation == "add") {
                // add the quantity
            }
            else {
                // deduct the quantity
            }

            // update the product in the DB
        }
        return res.send({
            statusCode : 200,
            message : "operation successfull"
        });
    }
    catch{
        throw new Error('Something Went Wrong')
    }
}