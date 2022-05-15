const WHITELISTED_DOMAINS = ['http://localhost:3000'];

export const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (WHITELISTED_DOMAINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
