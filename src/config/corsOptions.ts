import { CorsOptions } from 'cors';

const WHITELISTED_DOMAINS = ['http://localhost:3000'];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (WHITELISTED_DOMAINS.includes(origin!)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
