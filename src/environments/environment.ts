import CONFIG from '../assets/json/runtime.json'

import { IEnvironment } from '@interfaces/env'

export const environment: IEnvironment = {
  API_URL: CONFIG.API_URL,
  SENTRY_DSN: CONFIG.SENTRY_DSN,
  YANDEX_API_KEY: CONFIG.YANDEX_API_KEY,
  ENV: 'production',
}
