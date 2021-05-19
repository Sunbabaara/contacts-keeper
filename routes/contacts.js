const express = require("express");
const router = express.Router();

//get route api/contacts
//private access
router.get("/", (req, res)=>
{res.send("Get all contacts");
})

//post route api/contacts
//add new contact
//private access
router.post("/", (req, res)=>
{res.send("Add contact");
})

//post route api/contacts
//update contact
//private access
router.put("/:id", (req, res)=>
{res.send("Update contact");
})

//put route api/contacts
//delete contact
//private access
router.delete("/:id", (req, res)=>
{res.send("Delete contacts");
})
module.exports= router;