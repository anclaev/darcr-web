import CONFIG from '../assets/config.json'

import { IEnvironment } from '@interfaces/env'

export const environment: IEnvironment = {
  API_URL: CONFIG.API_URL,
}
