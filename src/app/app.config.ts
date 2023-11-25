import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { Routes } from '@interfaces/route'

const APP_ROUTES: Routes = [
  {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      title: 'Welcome',
    },
    // canActivate: [AuthGuard],
  },
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(APP_ROUTES)],
}
