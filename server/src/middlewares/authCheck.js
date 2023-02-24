require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

/**
//  * @param {express.ErrorRequestHandler} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const authCheck = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, userData) => {
    if (err) return res.status(403).json({success: false, errorMsg: "Forbidden"});
    next();
  });
};

module.exports = authCheck;
