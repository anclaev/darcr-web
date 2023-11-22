import axios from 'axios'

import { TelegramUserPayload } from '@/types/data'

export const signIn = async (data: TelegramUserPayload) =>
  axios
    .post(`${process.env.REACT_APP_API_URL!}/auth/sign-in`, data)
    .then(({ data }) => console.log(data))
