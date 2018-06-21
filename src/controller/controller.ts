import log from '../../lib/log'
import { createAuthController, AuthController } from './AuthController'

export let authController: AuthController

export const createController = async() => {
  authController = createAuthController()
  log.debug('Controller Created');
}

