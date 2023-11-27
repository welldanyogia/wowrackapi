import Article from '../models/articleModel.js';
import asyncHandler from 'express-async-handler';

//@desc     Get All Articles
//@route    GET api/articles
//@access   Private
const getArticles = asyncHandler(async (req, res) => {
    const articles = await Article.find({});
    res.json({
        status: true,
        articles_size: articles.length,
        articles: articles,
    });
});

//@desc     Create Article
//@route    POST api/articles
//@access   Private/Admin
const createArticle = asyncHandler(async (req, res) => {
    const { title, description, imageUrl } = req.body;

    const article = new Article({
        title,
        description,
        imageUrl,
    });

    const createdArticle = await article.save();
    res.status(201).json(createdArticle);
});

export { getArticles, createArticle };
