import axios from 'axios'

import { TelegramUserPayload } from '@/types/data'

export const signIn = async (data: TelegramUserPayload) => {
  return axios
    .post(`https://darcr-api.anclaev.com/auth/sign-in`, {
      ...data,
      id: `${data.id}`,
      auth_date: `${data.auth_date}`,
    })
    .then(({ data }) => {
      alert(`Hi, ${data.username}!`)
      console.log(data)
    })
}
