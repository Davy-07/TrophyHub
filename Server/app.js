require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const authRouter = require('./routes/auth');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const port = 3000;

app.use(express.json());
app.use('/api/v1/user',authRouter);
app.use(notFound);
app.use(errorHandler);

const start = async()=>{
    try{
        await connectDB(process.env.mongo_uri);
        app.listen(port,console.log(`Server listening on port 3000`));
    }
    catch(error)
    {
        console.log(error);
    }
}

start();