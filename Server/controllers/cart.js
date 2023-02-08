const cart = require("../models/cart");
const product = require("../models/product");
const CustomAPIError = require('../errors/customError');

const getCart = async(req,res)=>{
    const buyer = req.user.id;
    console.log(buyer);
    try{
            const cartItems = await cart.find({buyer});
            if(cartItems && cartItems.length>0)
            {
                res.status(200).json({cartItems});
            }
            else{
                res.status(200).json({message:"No cart items present"});
            }
    }catch(err){
            console.log(err);
            res.status(401).json({message:"Something went wrong"});
    }
}

const createCart = async(req,res)=>{

        const buyer = req.user.id;
        const {productID,quantity} = req.body;
        try{    
                const cartItems = await cart.findOne({buyer});
                const  prod = await product.findOne({_id:productID});
                
                if(!prod){
                    return res.status(401).json({message: "Product not found"});
                }

                const name = prod.name;
                const price = prod.price;
                if(cartItems){

                        const prodIndex = cartItems.items.findIndex((product)=>product.productID==productID);

                        if(prodIndex>-1)
                        {
                            let product = cartItems.items[prodIndex];
                            product.quantity += quantity;
                            cartItems.bill = cartItems.items.reduce((acc, curr)=>{
                                return acc + curr.quantity*curr.price;
                            },0);

                            cartItems.items[prodIndex] = product;
                            await cartItems.save();
                            res.status(200).json({cartItems});
                        }else{
                            cartItems.items.push({productID,name,quantity,price});
                            cartItems.bill = cartItems.items.reduce((acc, curr)=>{
                                return acc + curr.quantity*curr.price;
                            },0);
                            await cartItems.save();
                            res.status(200).json({cartItems});
                        }
                }else{
                    const newCart = await cart.create({
                        buyer,
                        items: [{productID,name,quantity,price}],
                        bill: quantity*price
                    })
                    return res.status(200).json({newCart});
                }   

        }catch(err){
                console.log(err);
                res.status(401).json({message:"Oops Something went wrong"});
        }
}

const deleteCartItem = async(req,res)=>{

            const buyer = req.user.id;
            const {productID} = req.body;

            try{
                const cartItems = await cart.findOne({buyer});
                const prodIndex = cartItems.items.findIndex((product)=> product.productID==productID); 
                if(prodIndex>-1){
                    let product = cartItems.items[prodIndex];
                    cartItems.bill -= product.price*product.quantity;
                    if(cartItems.bill==0)
                    {   
                        await cart.deleteOne({buyer});
                        return res.status(200).json({message:"No items in cart"});
                    }
                    cartItems.items.splice(prodIndex,1);
                    await cartItems.save();
                    res.status(200).json({cartItems});
                }else{
                    res.status(401).json({message:"Item Not found"});
                }
            }catch(err){
                console.log(err);
                res.status(401).json({message:"Something went wrong"});
            }
            


}   

module.exports = {getCart,createCart,deleteCartItem};