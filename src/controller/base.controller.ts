import * as httpStatus from 'http-status';
import log from '../lib/log';
export class BaseController {
    async checkHealth(): Promise<[number, string]>{
        //TODO: check your db connection
        return [httpStatus.OK,  httpStatus["200"]]
    }
}

export let baseController: BaseController;

export const createBaseController = async () => {
    baseController = new BaseController();
    log.debug('BaseController Created');
};
