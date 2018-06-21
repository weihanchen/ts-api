import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const port: string = process.env.PORT;