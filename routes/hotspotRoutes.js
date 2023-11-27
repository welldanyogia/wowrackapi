// routes/hotspotRoutes.js

import express from 'express';
import { getHotspots, addHotspot } from '../controllers/hotspotController.js';
const router = express.Router();

router.get('/', getHotspots);
router.post('/', addHotspot);

export default router;
