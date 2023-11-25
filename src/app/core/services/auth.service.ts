import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { TelegramUser, User } from '@models/user'
import { API } from '@enums/api'

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.user$$ = new BehaviorSubject<User | null>(null)
  }

  public user$$: BehaviorSubject<User | null>

  public get currentUser(): User | null {
    return this.user$$.value
  }

  public signIn(user: TelegramUser): Observable<User> {
    return this.http
      .post<User>(environment.API_URL + API.AUTH_SIGN_IN, user, {
        withCredentials: true,
      })
      .pipe(
        map((data) => {
          this.user$$.next(data)
          return data
        }),
        catchError((e) => {
          console.log('Sign in failed: ', e)
          return of(e)
        }),
      )
  }
}
