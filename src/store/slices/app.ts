import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppState, RootState } from '@/types/store'

const initialState: AppState = {
  token: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = null
    },
  },
})

export const { setToken, removeToken } = appSlice.actions
export const getToken = (state: RootState) => state.app.token

export default appSlice.reducer
