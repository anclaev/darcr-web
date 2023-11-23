import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { Component } from '@angular/core'

import { CoreModule } from './core/core.module'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = environment.API_URL
  test_env = environment.API_URL
}
