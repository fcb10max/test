const express = require("express");
const data = require("../../data.json");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getData = (req, res) => {
  res.json({success: true, data: data.posts});
}

module.exports = getData