import { AngularYandexMapsModule } from 'angular8-yandex-maps'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { NgModule } from '@angular/core'

import { environment } from 'src/environments/environment'

import { ConfigService } from '@services/config.service'
import { ToastService } from '@services/toast.service'

import { TelegramLoginComponent } from '@components/telegram-login/telegram-login.component'
import { HeaderComponent } from '@components/header/header.component'
import { MapComponent } from '@components/map/map.component'

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    AngularYandexMapsModule.forRoot({
      lang: 'ru_RU',
      apikey: environment.YANDEX_API_KEY,
    }),
    RouterLink,
  ],
  declarations: [TelegramLoginComponent, MapComponent, HeaderComponent],
  providers: [ConfigService, ToastService],
  exports: [TelegramLoginComponent, MapComponent, HeaderComponent],
})
export class CoreModule {}
