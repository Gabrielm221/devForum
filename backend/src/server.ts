import express from 'express';
import type { Request, Response} from 'express';
import cors from 'cors'

import { articleRoutes } from './routes/ArticleRoutes';
import { ArticleController } from './controllers/ArticleController';


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const articlesRouter = articleRoutes(new ArticleController());
app.use('/articles', articlesRouter);

app.get('/', (req : Request, res : Response) =>{
    res.send("Hello, is working!")
})

app.listen(port, () =>{
    console.log(`Api ouvindo na porta ${port}`);
})