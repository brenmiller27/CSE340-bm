// Needed Resources
const express = require("express");

const router = new express.router();

const invController = require("../controllers/invController");

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassicationId);

module.exports = router;