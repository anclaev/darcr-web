import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'

import * as Sentry from '@sentry/angular-ivy'

import { environment } from 'src/environments/environment'

import { AppComponent } from './app.component'

import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: environment.ENV === 'development',
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
