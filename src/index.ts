import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { router } from './routes/films'
import config from 'config';

const app = express()
app.use(json())
app.use(router)

mongoose.connect(config.get('mongo.url'), { autoCreate: true }, () => {
    console.log('connected to database');
})

app.listen(config.get('app.port'), () => {
    console.log(`server is listening on port ${config.get('app.port')}`);
})
