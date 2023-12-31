const express = require("express");
const router = express.Router();

//Diğer route dosyalarını içe aktarıyoruz

const productRoute = require("./products.js");
const authRoute = require("./auth.js");
const categoryRoute = require("./categories.js");
const userRoute = require("./users.js");

//Her rotayı ilgili yol altında kullanıyoruz.
router.use("/categories",categoryRoute)
router.use("/auth", authRoute);
router.use("/products", productRoute); 
router.use("/users", userRoute);

module.exports=router