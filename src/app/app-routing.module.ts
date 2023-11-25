import { PreloadAllModules, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { Routes } from '@interfaces/route'

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      title: 'Welcome',
    },
    // canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/',
    data: {
      title: 'Darcr',
    },
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
