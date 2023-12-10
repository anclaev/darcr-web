export interface IConfig {
  TELEGRAM_TOKEN: string | null
  YANDEX_API_KEY: string | null
}

export const INITIAL_CONFIG: IConfig = {
  TELEGRAM_TOKEN: null,
  YANDEX_API_KEY: null,
}
