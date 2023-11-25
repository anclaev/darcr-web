import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ConfigService } from '@services/config.service'
import { AuthService } from '@services/auth.service'

@NgModule({
  providers: [ConfigService, AuthService],
  imports: [CommonModule],
})
export class CoreModule {}
