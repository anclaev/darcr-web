import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ConfigService } from '@services/config.service'
import { ToastService } from '@services/toast.service'
import { AuthService } from '@services/auth.service'

import { TelegramLoginComponent } from '@components/telegram-login/telegram-login.component'

@NgModule({
  imports: [CommonModule, HttpClientModule, MatSnackBarModule],
  declarations: [TelegramLoginComponent],
  providers: [ConfigService, AuthService, ToastService],
  exports: [TelegramLoginComponent],
})
export class CoreModule {}
