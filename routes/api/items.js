const express = require("express");
const router = express.Router();

const Item = require("../../model/Item");

// get
// api/items
router.get("/", (req, res) => {
  Item.find()
    .sort({ title: 1 })
    .then(item => res.json(item));
});

//post
// api/items
router.post("/", (req, res) => {
  const data = req.body;
  const newItem = new Item(data);
  newItem.save().then(item => res.json(data));
});

//delete
// api/items/id
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
