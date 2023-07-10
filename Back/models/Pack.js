const mongoose = require('mongoose');

const PackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    cards: [{
        common: [{
            card: {
                type: String
            },
            chance: {
                type: Number
            }
        }],
        rare: [{
            card: {
                type: String
            },
            chance: {
                type: Number
            }
        }],
        legend: [{
            card: {
                type: String
            },
            chance: {
                type: Number
            }
        }]
    }]
});

module.exports = Pack = mongoose.model('pack', PackSchema);