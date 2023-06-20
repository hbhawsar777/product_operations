const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const port = 3000;

const inventorySchema = {
    productId : Number,
    quantity : Number
}
app.post('/edit_products', routes.editProducts);


async function connectToDB(){
    let db = await mongoose.connect('mongodb+srv://Admin:Admin@apis.nji9bvl.mongodb.net/');
    console.log('==connected to DB===',mongoose);
}

// connect to DB
connectToDB();

//   Express Server
app.listen(port , (req, res) => {
    console.log('===server running on port -->', port);
})