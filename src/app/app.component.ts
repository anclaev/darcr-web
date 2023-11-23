import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'darcr-web'
}
