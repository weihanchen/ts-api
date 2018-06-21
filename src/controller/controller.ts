import log from '../../lib/log'

export default class Controller {
  static async create() {
    return new Controller()
  }
}

export let controller: Controller

export const createController = async() => {
  log.debug('Controller Create');
  controller = await Controller.create();
}

