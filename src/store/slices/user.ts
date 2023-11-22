import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserState, RootState, UserSigninPayload } from '@/types/store'

export const initialState: UserState = {
  id: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserSigninPayload>) => {
      state.id = action.payload.id
    },
    signOut: (state) => {
      state.id = null
    },
  },
})

export const { signIn, signOut } = userSlice.actions
export const getUser = (state: RootState) => state.user.id

export default userSlice.reducer
