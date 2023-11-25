import { Route } from '@angular/router'

export interface IRouteData {
  title?: string
}

export interface IRoute extends Route {
  data?: IRouteData
}

export type Routes = IRoute[]
