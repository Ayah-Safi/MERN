const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProduct = (request, response) => {
    console.log("Ayah");
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}