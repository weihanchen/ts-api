import * as httpStatus from 'http-status';
import log from '../lib/log';
import { UserModel } from '../model/user.model';
import { User } from '../model/type';
export class AuthController {
    private userModel: UserModel;
    constructor(userModel: UserModel) {
        this.userModel = userModel;
    }
    async login(username: string, password: string): Promise<[number, any]>{
        const user = await this.userModel.find(username, password);
        if (user) {
            return [httpStatus.OK, user]
        }
        return [httpStatus.UNAUTHORIZED, httpStatus["401"]]
    }
}

export let authController: AuthController;

export const createAuthController = async () => {
    authController = new AuthController(new UserModel());
    log.debug('AuthController Created');
};
