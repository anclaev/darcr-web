import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { TelegramUser, User } from '@models/user'
import { Router } from '@angular/router'
import { API } from '@enums/api'

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.user$$ = new BehaviorSubject<User | null>(null)
  }

  public user$$: BehaviorSubject<User | null>

  public get currentUser(): User | null {
    return this.user$$.value
  }

  public signIn(user: TelegramUser, isDev: boolean = false): Observable<User> {
    switch (isDev) {
      case false: {
        return this.http
          .post<User>(
            environment.API_URL + API.AUTH_SIGN_IN,
            {
              ...user,
              auth_date: user.auth_date?.toString(),
              id: user.id.toString(),
            },
            {
              responseType: 'json',
              reportProgress: true,
            },
          )
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

      case true: {
        return this.http
          .post<User>(
            environment.API_URL + API.AUTH_SIGN_IN,
            {
              ...user,
              auth_date: user.auth_date?.toString(),
              id: user.id.toString(),
            },
            {
              responseType: 'json',
            },
          )
          .pipe(
            map((data) => {
              this.user$$.next(data)
              return data
            }),
          )
      }
    }
  }

  public check(returnUrl?: string) {
    return this.http.get<User>(environment.API_URL + API.AUTH_ME).pipe(
      map((user) => {
        this.user$$.next(user)
        return true
      }),
      catchError(() => {
        return of(
          this.router.createUrlTree(['/sign-in'], {
            queryParams: {
              returnUrl,
            },
          }),
        )
      }),
    )
  }
}
