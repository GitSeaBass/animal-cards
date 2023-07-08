const express = require('express');
const router = express.Router();

const Pack = require('../../models/Pack');

router.get('/', (req,res) => {res.send('test get / pack route')});
router.get('/:id', (req,res) => {res.send('test get /:id pack route')});
router.post('/', (req,res) => {
    Pack.create(req.body)
    .then((item) => res.json({msg: 'Item added successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to add this item'}));
});
router.put('/:id', (req,res) => {res.send('test put /:id pack route')});

module.exports = router;