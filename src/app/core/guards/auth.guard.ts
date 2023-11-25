import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { inject } from '@angular/core'

import { AuthService } from '@services/auth.service'

export const authGuard: CanActivateFn = (_, state: RouterStateSnapshot) => {
  const auth = inject(AuthService)

  return !!auth.currentUser ? true : auth.check(state.url)
}
