export interface TelegramUser {
  id: string
  first_name?: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date?: string
  hash: string
}

export interface User {
  id: number
  telegramId: bigint
  username: string | null
  first_name: string | null
  last_name: string | null
  photo_url: string | null
  auth_date: Date
  scenes: UserScenes
}

export type UserScenes = any
