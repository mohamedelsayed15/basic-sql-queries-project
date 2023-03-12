const Product = require('../models/product')

const Cart = require('../models/cart')

exports.getProducts = async (req, res) => {
    try {

        const products = await Product.fetchAll()

        res.send(products)

    } catch (e) { 
        console.log(e)
        res.send("error")
    }
}

exports.findById = async (req, res) => {
    try {

        const products = await Product.findById(req.params.id)

        res.send(products)
    } catch (e) { 
        res.send(e)
    }
}

exports.changePrice = (req, res) => {

    const products = Product.changePrice(req.params.id,req.body.price)

    res.send({})
}

exports.deleteProduct = (req, res) => {

    const products = Product.deleteProduct(req.params.id)

    res.send({})
}

exports.addProduct = async (req, res) => {
    try {
        if (!req.body.tittle ||
            !req.body.description ||
            !req.body.price ||
            !req.body.quantity ||
            !req.body.image
        ) { return res.send("invalid") }

        const product = new Product(
            req.body.tittle,
            req.body.description,
            req.body.price,
            req.body.quantity,
            req.body.image
        )

        await product.save()

        res.send(product)

    } catch (e) { 
        res.send("missing information")
    }
}