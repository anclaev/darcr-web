import { Component } from '@angular/core'
import { first } from 'rxjs'

import { WidgetConfiguration } from '@components/telegram-login/telegram-login.component'

import { ToastService } from '@services/toast.service'
import { AuthService } from '@services/auth.service'
import { TelegramUser } from '@models/user'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass',
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
  ) {}

  public isDev: boolean = environment.ENV === 'development'

  public botConfig: WidgetConfiguration = {
    buttonStyle: 'large',
    showUserPhoto: false,
  }

  loginHandler(data: any) {
    this.authService
      .signIn(data as TelegramUser)
      .pipe(first())
      .subscribe({
        next: (data) => {
          let name = data.first_name
            ? data.first_name
            : data.username
            ? data.username
            : data.id

          console.log(data)
          this.toastService.show(`Hi, ${name}!`)
        },
      })
  }

  mockLoginHandler() {
    this.authService
      .signIn(
        {
          id: '777',
          username: 'test',
          hash: 'aefauefg24uf2',
        },
        this.isDev,
      )
      .pipe(first())
      .subscribe({
        next: (data) => {
          this.toastService.show(
            `Hi, ${data.username ? data.username : data.id}!`,
          )
        },
      })
  }
}
