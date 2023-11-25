import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { provideRouter } from '@angular/router'

import { authGuard } from '@guards/auth.guard'

import { Routes } from '@interfaces/route'
import { HttpClientModule } from '@angular/common/http'

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: {
      title: 'Dashboard',
    },
    canActivate: [authGuard],
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      title: 'Welcome',
    },
  },
  {
    path: '**',
    redirectTo: '/',
    data: {
      title: 'Darcr',
    },
  },
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    importProvidersFrom([BrowserAnimationsModule, HttpClientModule]),
  ],
}
