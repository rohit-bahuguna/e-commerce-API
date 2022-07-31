
const express = require("express");
const app = express();
const productRoute = require('./router/products');
const cors = require('cors')
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(cors())


app.get("/",  (req, res) => {
  res.send("app is runing ");
});

app.use('/product' , productRoute) ;


app.get("*", (req, res) => {
  res.send("page not found");
});



try {
  mongoose.connect(process.env.MONGO_URL)
  console.log("mongodb connected...")
} catch (error) {
  console.log("error -------> " , error);
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);

