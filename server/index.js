require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"], credentials: true }));
app.use(cookieParser());
app.use(router);

app.listen(process.env.PORT);
