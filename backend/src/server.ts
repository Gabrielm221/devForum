const express = require('express');
import type { Request, Response} from 'express';
const cors = require('cors')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req : Request, res : Response) =>{
    res.send("Hello, is working!")
})

app.listen(port, () =>{
    console.log(`Api ouvindo na porta ${port}`);
})