const db = require('../util/mysql')
const Cart = require('./cart')

module.exports =  class Product {

    constructor(tittle, description, price, quantity, image) {
        
        this.tittle = tittle;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.image = image
    }

    async save() {
        const val = await db.execute("INSERT INTO products (title, price, description, image_url) VALUES (?,?,?,?)",
        [this.tittle,this.price,this.description,this.image]
        )
        return val
    }

    static async fetchAll() {

        const val = await db.execute('SELECT * FROM products')

        return val [0]
    }

    static changePrice(id, price) {
    }

    static deleteProduct(id) {
    }

    static async findById(id) {

        const val = await db.execute('SELECT * FROM products WHERE products.id = ?', [id])

        return val [0]
    }
}
/*
 In Node.js, the static keyword is used to create methods or properties that belong to the class itself,

 rather than to its instances. These methods can be called directly on the class,

 without having to create an instance of the class first.
*/ 
