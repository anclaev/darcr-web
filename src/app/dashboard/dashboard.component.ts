import { Component } from '@angular/core'

import { inOutComponentAnimation } from '@animations/in-out-component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
  animations: [inOutComponentAnimation],
})
export class DashboardComponent {}
