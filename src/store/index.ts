import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/app'
import userReducer from './slices/user'

import { AppDispatch, RootState } from '@/types/store'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
})

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
