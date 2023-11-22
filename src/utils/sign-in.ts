import axios from 'axios'

import { TelegramUserPayload } from '@/types/data'

export const signIn = async (data: TelegramUserPayload) =>
  axios
    .post(`https://darcr-api.anclaev.com/auth/sign-in`, data)
    .then(({ data }) => console.log(data))
