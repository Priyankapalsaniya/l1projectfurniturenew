const express = require("express");
const router = express.Router();

// http://your-alb-url/furniture
router.get("/", (req, res) => {
    res.send("Furniture products Page");
});


module.exports = router;
