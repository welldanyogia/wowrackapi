// controllers/hotspotController.js

import Hotspot from '../models/hotspotModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Get all Hotspots
// @route   GET api/hotspots
// @access  Public
const getHotspots = asyncHandler(async (req, res) => {
    const hotspots = await Hotspot.find({});
    res.json({ status: true, hotspot_size: hotspots.length, hotspots });
});

// @desc    Add a Hotspot
// @route   POST api/hotspots
// @access  Public
const addHotspot = asyncHandler(async (req, res) => {
    const { name, lang, long } = req.body;

    const hotspot = new Hotspot({
        name,
        lang,
        long,
    });

    const createdHotspot = await hotspot.save();
    res.status(201).json(createdHotspot);
});

export { getHotspots, addHotspot };
