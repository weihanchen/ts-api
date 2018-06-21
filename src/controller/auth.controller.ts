import log from '../../lib/log';
export class AuthController {}

export const createAuthController = async () => {
    log.debug('AuthController Create');
    return new AuthController();
};
