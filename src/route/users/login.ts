import { Router, Request, Response, NextFunction } from 'express';
import log from '../../lib/log';
import { authController } from '../../controller/auth.controller';

const login = Router();

const post = async (req: Request, res: Response, next: NextFunction) => {
   try {
       const { username, password } = req.body;
       const [status, message] = await authController.login(username, password);
       res.status(status).send(message);
   } catch (error) {
       log.error(error);
       next(`health error  ${error}`);
   }
};

login.post('/login', post);

export default login;
