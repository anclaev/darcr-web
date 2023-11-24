import { HttpClientModule } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { Subscription } from 'rxjs'

import { CoreModule } from './core/core.module'

import { ConfigService } from '@services/config.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private config: ConfigService) {
    this.configLoading$$ = new Subscription()
  }

  title = 'Darcr'

  private configLoading$$: Subscription

  ngOnInit(): void {
    this.configLoading$$ = this.config.loadConfig()
  }

  ngOnDestroy(): void {
    this.configLoading$$.unsubscribe()
  }
}
