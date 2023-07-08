const express = require('express');
const router = express.Router();

const Pack = require('../../models/Pack');

router.get('/', (req,res) => {
    Pack.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemsfound: 'No Items found'}));
});
router.get('/:id', (req,res) => {
    Pack.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({noitemfound: 'No Item found'}));
});
router.post('/', (req,res) => {
    Pack.create(req.body)
    .then((item) => res.json({msg: 'Item added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});
router.put('/:id', (req,res) => {
    Pack.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Updated Successfully'}))
    .catch((err) => res.status(400).json({err: 'Unable to update the Database'}));
});
router.delete('/:id', (req,res) => {
    Pack.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({msg: 'Item entry deleted successfully'}))
    .catch((err) => res.status(404).json({err: 'No such item'}));
});

module.exports = router;