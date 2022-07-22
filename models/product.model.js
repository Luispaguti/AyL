const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    category:{
        type: String,
        required: "Category is required",
        enum: [
            "coches", 
            "motos", 
            "motor-accesorios", 
            "moda-accesorios", 
            "inmobiliaria", 
            "audiovisual", 
            "moviles", 
            "informatica-electronica", 
            "deportes" ,   
            "bicicletas", 
            "videojuegos", 
            "hogar", 
            "electrodomesticos", 
            "cultura", 
            "puericultura", 
            "coleccionismo", 
            "construccion", 
            "agricola", 
            "empleo", 
            "servicios", 
            "otros"
        ], 
    },
    image:{
        type: String,
        default: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3675715.jpg"
    },
    price:{
        type: Number,
        required: "Price is required",
    },
    title:{
        type: String,
        required: "Title is required",
        trim:true,
    },
    description:{
        type: String,
        required: "Description is required",
    },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;