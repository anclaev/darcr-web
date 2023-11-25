import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { CoreModule } from '../core/core.module'

import { AuthRoutingModule } from './auth-routing.module'
import { AuthComponent } from './auth.component'

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, CoreModule],
})
export class AuthModule {}
