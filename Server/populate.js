require('dotenv').config();

const product = require('./models/product');
const db_connect = require('./db/connect');
const prod_json = require('./jsons/product.json');


const start = async()=>{
    try{
         await db_connect(process.env.mongo_uri);
         console.log('Connected Succesfully to database');
         await  product.create(prod_json);
         console.log("Populated Succesfully");
         process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

start();