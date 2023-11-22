export interface TelegramUserPayload {
  id: number
  auth_date: number
  username: string
  first_name?: string
  last_name?: string
  hash: string
  photo_url?: string
}
