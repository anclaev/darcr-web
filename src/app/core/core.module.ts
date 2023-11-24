import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AuthService } from '@services/auth.service'
import { ConfigService } from '@services/config.service'

@NgModule({
  declarations: [],
  providers: [ConfigService, AuthService],
  imports: [CommonModule],
})
export class CoreModule {}
