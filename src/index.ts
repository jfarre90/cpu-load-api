import { corsOptions } from './config/corsOptions';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import { app } from './app';
import path from 'path';

config({ path: path.join(__dirname, '/.env') });

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`⚡️[server]: Started and listening on port ${port}!`));
