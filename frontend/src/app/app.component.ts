import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, ButtonModule, NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taste-of-angular';

  constructor(private userService: UserService) {}
}
