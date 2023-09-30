const express = require("express");

const router = express.Router();

router.use("/users", require("./user.route"));
router.use("/books", require("./book.route"));


module.exports = router;