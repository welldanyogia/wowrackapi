import express from 'express';
import { getArticles, createArticle } from '../controllers/articleController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getArticles).post(createArticle);

export default router;
