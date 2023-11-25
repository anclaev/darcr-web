import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ConfigService } from '@services/config.service'
import { AuthService } from '@services/auth.service'

import { TelegramLoginComponent } from '@components/telegram-login/telegram-login.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TelegramLoginComponent],
  providers: [ConfigService, AuthService],
  exports: [TelegramLoginComponent],
})
export class CoreModule {}
