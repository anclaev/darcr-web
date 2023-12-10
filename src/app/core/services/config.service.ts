import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from 'src/environments/environment'

import { IConfig, INITIAL_CONFIG } from '@interfaces/config'
import { API } from '@enums/api'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {
    this.CONFIG = INITIAL_CONFIG
    this.API_URL = environment.API_URL
    this.isProduction = environment.ENV === 'production'
  }

  private CONFIG: IConfig
  private API_URL: string

  public isProduction: boolean

  public loadToken() {
    return this.http
      .get(`${this.API_URL}${API.AUTH_TOKEN}`, {
        responseType: 'text',
      })
      .subscribe({
        next: (data: string) => {
          this.CONFIG.TELEGRAM_TOKEN = data
        },
        complete: () => {
          if (!this.isProduction) console.log('Token successfully loaded.')
        },
        error: (e) => {
          console.log('Token loading is failed:', e)
        },
      })
  }

  get yandexApiKey() {
    return this.CONFIG.YANDEX_API_KEY
  }
}
