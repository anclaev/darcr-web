import { ActivatedRoute, Router } from '@angular/router'
import { Component } from '@angular/core'
import { first } from 'rxjs'

import { WidgetConfiguration } from '@components/telegram-login/telegram-login.component'

import { inOutComponentAnimation } from '@animations/in-out-component'
import { ToastService } from '@services/toast.service'
import { AuthService } from '@services/auth.service'
import { TelegramUser } from '@models/user'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.sass',
  animations: [inOutComponentAnimation],
})
export class AuthComponent {
  constructor(
    private toastService: ToastService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    if (this.authService.currentUser) {
      this.router.navigate(['/'])
    }

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  public isDev: boolean = environment.ENV === 'development'

  private returnUrl: string = '/'

  public botConfig: WidgetConfiguration = {
    buttonStyle: 'large',
    showUserPhoto: false,
  }

  public mockUser: TelegramUser = {
    id: '777',
    username: 'Artem',
    hash: 'aefauefg24uf2',
  }

  loginHandler(data: any, isDev?: boolean) {
    this.authService
      .signIn(data as TelegramUser, isDev)
      .pipe(first())
      .subscribe({
        next: (data) => {
          let name = data.first_name
            ? data.first_name
            : data.username
            ? data.username
            : data.id

          this.toastService.show(`Hi, ${name}!`)
          this.router.navigate([this.returnUrl])
        },
      })
  }
}
