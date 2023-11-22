import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/store'
import { initialState, signIn, signOut } from '@/store/slices/user'

import { UserSigninPayload } from '@/types/store'

const AuthContext = createContext({
  user: initialState,
  login: (data: UserSigninPayload) => {},
  logout: () => {},
})

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.user)

  const login = useCallback(
    (data: UserSigninPayload) => {
      dispatch(signIn(data))
      navigate('/dash', { replace: true })
    },
    [dispatch, navigate],
  )

  const logout = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
