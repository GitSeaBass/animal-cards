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
            card: [{
                image: {
                    type: String,
                },
                chance: {
                    type: Number
                }
            }]
        }],
        rare: [{
            card: [{
                image: {
                    type: String,
                },
                chance: {
                    type: Number
                }
            }]
        }],
        legend: [{
            card: [{
                image: {
                    type: String,
                },
                chance: {
                    type: Number
                }
            }]
        }]
    }]
});

module.exports = Pack = mongoose.model('pack', PackSchema);