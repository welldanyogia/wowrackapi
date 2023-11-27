// models/hotspotModel.js

import mongoose from 'mongoose';

const hotspotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lang: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },
});

const Hotspot = mongoose.model('Hotspot', hotspotSchema);

export default Hotspot;
