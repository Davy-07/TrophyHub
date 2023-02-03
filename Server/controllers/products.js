const product = require('../models/product');
const CustomAPIError = require('../errors/customError');

const getAllProducts = async (req, res) => {

    try {
        const all = await product.find({});
        if (all) {
            res.status(200).json({ products: all });
        }
    } catch (err) {
        throw CustomAPIError("Something went wrong", 401);
    }

}

const getProductsBySubCategory = async (req, res) => {

    const sub = req.query.sub;
    try {
        const products = await product.find({ subcategory: sub });
        if (products.length > 0) {
            res.status(200).json({ products });
        }
        else {
            res.status(404).json({ msg: "SubCategory Not Found" });
        }
    } catch (err) {
        throw CustomAPIError("Something went wrong", 401);
    }

}

const getProductsByCategory = async (req, res) => {

    const category = req.query.category;
    try {
        const products = await product.find({ category });
        if (products.length > 0) {
            res.status(200).json({ products });
        }
        else {
            res.status(404).json({ msg: "Category Not Found" });
        }
    } catch (err) {
        throw CustomAPIError("Something went wrong", 401);
    }
}

const getProductsByName = async (req, res) => {

    const name = req.query.product;
    try {
        const products = await product.findOne({ name });
        if (products) {
            res.status(200).json({ products });
        }
        else {
            res.status(401).json({ msg: "Product not found" });
        }
    }
    catch (err) {
        throw CustomAPIError("Something went wrong", 401);
    }
}

const sortByPriceandSize = async (req, res) => {

    const { subcategory, sort } = req.query;
    let sortlist;
    if (sort) {
        sortlist = sort.split(',').join(' ');
    }
    console.log(sortlist);
    try {
        const products = await product.find({ subcategory }).sort(sortlist);
        res.status(200).json({ products });
    } catch (err) {
        console.log(err);
        throw new CustomAPIError("Something went wrong", 401);
    }
}



module.exports = {getAllProducts,getProductsBySubCategory,getProductsByCategory,getProductsByName,sortByPriceandSize};