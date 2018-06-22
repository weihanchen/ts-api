import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as expressValidator from 'express-validator';
import * as logger from 'morgan';
import router from './route';
import { createController } from './controller';
import { port } from './config';
import log from './lib/log';
(async () => {
    await createController();
    const app = express();
    app.use(logger('common'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    app.use('/api', router);
    app.use(
        (
            err: any,
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ) => {
            log.error(err.stack || err);
            res.status(500).send(err.stack || err);
            next();
        }
    );
    app.listen(port, () => {
        log.info('App is running at http://localhost:%d in %s mode', port);
        log.info('Press CTRL-C to stop\n');
    });
})();
