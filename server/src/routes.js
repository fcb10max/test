const router = require("express").Router();

const login = require("./controllers/login");
const register = require("./controllers/register");
const refreshAccessToken = require("./controllers/refreshAccessToken");
const getData = require("./controllers/getData");
const authCheck = require("./middlewares/authCheck");

router.post("/login", login);
router.post("/register", register);
router.get("/refreshToken", refreshAccessToken);
router.use("/api", authCheck)
router.get("/api",getData);

module.exports = router;
