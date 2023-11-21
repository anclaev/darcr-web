import { store } from '@/store'

export interface AppState {
  token: string | null
}

export interface UserState {
  id: number | null
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type UserSigninPayload = {
  id: number
}
