import { Router } from 'express';
import type { ArticleController } from '../controllers/ArticleController.ts'

export function articleRoutes(
    articleController : ArticleController,
): Router{
    const router = Router();

    router.get('/', articleController.getArticles.bind(articleController));
    router.get('/:id', articleController.getArticleById.bind(articleController));
    router.post('/', articleController.createArticle.bind(articleController));
    
    return router
}