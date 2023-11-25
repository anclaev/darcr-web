import { Component } from '@angular/core'

import { WidgetConfiguration } from '@components/telegram-login/telegram-login.component'
import { AuthService } from '@services/auth.service'
import { TelegramUser } from '@models/user'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass',
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  public botConfig: WidgetConfiguration = {
    buttonStyle: 'large',
    showUserPhoto: false,
  }

  loginHandler(data: TelegramUser) {
    this.authService.signIn(data)
  }
}
