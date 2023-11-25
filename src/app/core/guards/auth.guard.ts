import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { inject } from '@angular/core'

import { AuthService } from '@services/auth.service'

export const authGuard: CanActivateFn = (_, state: RouterStateSnapshot) =>
  !!inject(AuthService).currentUser
    ? true
    : inject(Router).createUrlTree(['/sign-in'], {
        queryParams: {
          returnUrl: state.url,
        },
      })
