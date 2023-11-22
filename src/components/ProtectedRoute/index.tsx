import { ProtectedRouteComponent } from '@/types/components'

import { useAuth } from '@/utils/auth-provider'
import { Navigate, Route } from 'react-router-dom'

export const ProtectedRoute: ProtectedRouteComponent = (props) => {
  const { user } = useAuth()

  if (!user.id) {
    return <Navigate to={props.redirectUrl ?? '/'} />
  }

  return <Route />
}
