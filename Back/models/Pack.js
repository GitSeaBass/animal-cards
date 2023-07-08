const mongoose = require('mongoose');

const PackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = Pack = mongoose.model('pack', PackSchema);