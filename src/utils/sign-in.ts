import axios from 'axios'

import { TelegramUserPayload } from '@/types/data'

export const signIn = async (data: TelegramUserPayload) =>
  axios.post(`/auth/sign-in`, data).then(({ data }) => console.log(data))
