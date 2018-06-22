import log from '../lib/log';
import { createAuthController } from './auth.controller';
import { createBaseController } from './base.controller';

export const createController = async () => {
    await createAuthController();
    await createBaseController();
    log.debug('All controller Created');
};
