import axios from 'axios'

import { TelegramUserPayload } from '@/types/data'

export const signIn = async (data: TelegramUserPayload) =>
  axios
    .post(`https://darcr-api.anclaev.com/auth/sign-in`, {
      ...data,
      id: `${data.id}`,
      auth_date: `${data.auth_date}`,
    })
    .then(({ data }) => console.log(data))
