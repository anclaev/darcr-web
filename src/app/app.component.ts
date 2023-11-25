import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router'

import {
  APP_INITIALIZER,
  Component,
  ErrorHandler,
  OnDestroy,
} from '@angular/core'

import { Title } from '@angular/platform-browser'
import { Subscription, filter, map } from 'rxjs'
import * as Sentry from '@sentry/angular-ivy'

import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import { environment } from 'src/environments/environment'

import { ConfigService } from '@services/config.service'

import { CoreModule } from './core/core.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, CoreModule],
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
})
export class AppComponent implements OnDestroy {
  constructor(
    private configService: ConfigService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.configLoading$$ = this.configService.loadToken()
    this.routerEvents$$ = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((event) => {
          let child = this.activatedRoute.firstChild

          while (child) {
            if (child.firstChild) child = child.firstChild
            else if ('title' in child.snapshot.data)
              return {
                event,
                title: child.snapshot.data['title'],
              }
            else return { event, title: null }
          }

          return { event, title: null }
        }),
      )
      .subscribe((data: any) => {
        if (data.title) this.titleService.setTitle(data.title)
      })
  }

  title = 'Darcr'

  private configLoading$$: Subscription
  private routerEvents$$: Subscription

  ngOnDestroy(): void {
    this.configLoading$$.unsubscribe()
    this.routerEvents$$.unsubscribe()
  }
}
