import { IEnvironment } from '@interfaces/env'

import CONFIG from '../assets/config.json'

export const environment: IEnvironment = {
  API_URL: CONFIG.API_URL,
  TELEGRAM_TOKEN: CONFIG.TELEGRAM_TOKEN,
}
