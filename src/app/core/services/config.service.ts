import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from 'src/environments/environment'

import { IConfig, INITIAL_CONFIG } from '@interfaces/config'
import { tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
    this.CONFIG = INITIAL_CONFIG
    this.API_URL = environment.API_URL
  }

  private CONFIG: IConfig
  private API_URL: string

  public loadConfig() {
    return this.http
      .get(`${this.API_URL}auth/token`, {
        responseType: 'text',
      })
      .subscribe({
        next: (data: string) => {
          this.CONFIG.TELEGRAM_TOKEN = data
        },
        complete: () => {
          console.log('Config loaded.')
          alert('Config is loading!')
        },
        error: () => {
          console.log('Config loading is failed.')
          alert('Config loading is failed.')
        },
      })
  }
}
