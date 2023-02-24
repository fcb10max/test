const express = require("express");
const jwt = require("jsonwebtoken");
const changeRow = require("../db/changeRow");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const refreshAccessToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.status(403).end();
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, {name, email}) => {
      if (err) return res.status(403).end();
      const newAccessToken = jwt.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "10min",
        }
      );
      const newRefreshToken = jwt.sign(
        { email, name },
        process.env.REFRESH_TOKEN_SECRET
      );
      await changeRow("email", email, "refreshToken", newRefreshToken);
      res.cookie("accessToken", newAccessToken, {httpOnly: true});
      res.cookie("refreshToken", newRefreshToken, {httpOnly: true});
      res.status(203).end();
    }
  );
};

module.exports = refreshAccessToken;
