import express from 'express';

const health = express.Router();

const get = async (req, res, next) => {
   try {
       const [status, message] = await controller.checkHealth();
       res.status(status).send(message);
   } catch (error) {
       log.error(error);
       next(`health error  ${error}`);
   }
};

health.get('/health', get);

export default health;
