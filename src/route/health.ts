import { Router, Request, Response, NextFunction } from 'express';
import log from '../lib/log';
import { baseController } from '../controller/base.controller';

const health = Router();

const get = async (req: Request, res: Response, next: NextFunction) => {
   try {
       const [status, message] = await baseController.checkHealth();
       res.status(status).send(message);
   } catch (error) {
       log.error(error);
       next(`health error  ${error}`);
   }
};

health.get('/health', get);

export default health;
