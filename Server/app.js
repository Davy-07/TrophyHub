require("dotenv").config();
var cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const cartRouter = require("./routes/cart");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", authRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
	try {
		await connectDB(process.env.mongo_uri);
		app.listen(port, console.log(`Server listening on port 3000`));
	} catch (error) {
		console.log(error);
	}
};

start();
