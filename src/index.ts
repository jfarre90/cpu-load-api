import { config } from 'dotenv';
import path from 'path';
import app from './app';

config({ path: path.join(__dirname, '/.env') });

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`⚡️[server]: Started and listening on port ${port}!`));
