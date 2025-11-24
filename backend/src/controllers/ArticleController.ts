import type { Request, Response } from 'express';

interface AuthUserPayload{
    id : number;
    name : string;
    email: string;
}

interface CustomRequest extends Request{
    user?: AuthUserPayload;
}

interface ArticleForm{
    id : number;
    title : string;
    content : string;
}


export class ArticleController{
    articles : ArticleForm[] = []

    public async getArticles(req : Request, res : Response){
        res.send(this.articles)
    }

    public async getArticleById(req : Request, res : Response){
        res.status(201);
    }

    public async createArticle(req : Request, res : Response){
        const newArticle : ArticleForm = {
            id : Number(req.body.id),
            title : String(req.body.title),
            content : String(req.body.content)
        }
        this.articles.push(newArticle)
        return res.status(201).json(newArticle);
    }
}