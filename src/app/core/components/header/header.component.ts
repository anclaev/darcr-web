import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  public user = {
    id: 1,
    login: 'anclaev',
    avatar: 'assets/images/mock-user-avatar.jpg',
  }
  public currentCity = 'Minsk'
}
