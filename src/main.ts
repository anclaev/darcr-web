import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import * as Sentry from '@sentry/angular-ivy'

import { AppModule } from './app/app.module'

import { environment } from './environments/environment'
import { sentryIgnoreRegex } from './common'

// TODO: Передать в tracePropagationTargets env с регуляркой api
Sentry.init({
  dsn: environment.SENTRY_DSN,
  environment: environment.ENV,
  ignoreErrors: [sentryIgnoreRegex],

  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [
        'localhost',
        /^https:\/\/darcr-api.anclaev\.com/,
      ],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

if (environment.ENV === 'production') enableProdMode()

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((e) => console.error(e))
