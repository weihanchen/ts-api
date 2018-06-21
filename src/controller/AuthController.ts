import log from '../../lib/log';
export class AuthController {
    static async create() {
        return new AuthController();
    }
}

export const createAuthController = async () => {
    log.debug('AuthController Create');
    return await AuthController.create();
};
