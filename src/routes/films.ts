import express, { Request, Response } from 'express';
import { Film } from '../models/film';

const router = express.Router();

router.get('/api/films', async (req: Request, res: Response) => {    
    const query: any = {};    

    if(req.query.year) {
        query.year = req.query.year;
    }

    if(req.query.genre1) {
        query.genre1 = req.query.genre1;
    }

    if(req.query.genre2) {
        query.genre2 = req.query.genre2;
    }

    const films = await Film.find(query);
    return res.status(200).send(films);
})

export { router }
