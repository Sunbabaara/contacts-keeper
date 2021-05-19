const express = require("express");
const router = express.Router();

//get route api/auth, private access
router.get("/", (req, res)=>
{res.send("Get logged in user");
});

//post route api/auth, public access
router.post("/", (req, res)=>
{res.send("Log in user");
});

module.exports= router;