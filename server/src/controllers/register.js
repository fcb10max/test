require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const getUsersFromDB = require("../db/getUsers");
const addUserToDB = require("../db/addNewUser");
const express = require("express");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns {any}
 */

const register = async (req, res) => {
  /**
   * @type {{name: string, email: string, tel: number, password: string}}
   */
  const { name, email, tel, password } = req.body;
  if (!name || !email || !tel || !password)
    return res
      .status(400)
      .json({ success: false, errorMsg: "Missing required values" });
  const userExists = await getUsersFromDB({ email, tel });

  if (!!userExists.length)
    return res.status(406).json({
      success: false,
      errorMsg: "User with given email or tel already exists",
    });

  try {
    const hashPassword = async (password) => {
      const salt = await bcrypt.genSalt(10);
      return await bcrypt.hash(password, salt);
    };
    const hashedPassword = await hashPassword(password);
    const refreshToken = jwt.sign(
      { name, email },
      process.env.REFRESH_TOKEN_SECRET
    );
    const accessToken = jwt.sign(
      { email },
      process.env.ACCESS_TOKEN_SECRET, {expiresIn: "10min"}
    );
    const newUserId = (
      await addUserToDB({
        email,
        name,
        password: hashedPassword,
        tel,
        refreshToken
      })
    )[0];
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      errorMsg: "Something went wrong during user creation",
    });
  }
};

module.exports = register;