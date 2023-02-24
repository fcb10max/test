const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const getUsers = require("../db/getUsers");
const changeRow = require("../db/changeRow");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {any}
 */

const login = async (req, res) => {
  const { email, tel, password } = req.body;
  const user = (await getUsers({ email, tel }))[0];
  if (!user)
    return res.status(404).json({ success: false, errorMsg: "User not found" });
  try {
    const passCorrect = await bcrypt.compare(password, user.password);
    if (!passCorrect)
      return res
        .status(403)
        .json({ success: false, errorMsg: "Invalid password" });
    const refreshToken = jwt.sign(
      { name: user.name, email: user.email },
      process.env.REFRESH_TOKEN_SECRET
    );
    if (email) await changeRow("email", email, "refreshToken", refreshToken);
    else if (tel)
      await changeRow("tel", parseInt(tel), "refreshToken", refreshToken);
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "10min",
    });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, errorMsg: "Something went wrong during login" });
  }
};

module.exports = login;