import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { AuthComponent } from './auth.component'

import { Routes } from '@interfaces/route'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
