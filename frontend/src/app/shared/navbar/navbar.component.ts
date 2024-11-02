import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  user = null;
  router = inject(Router);

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
    })
  }

  logoutUser(e: any) {
    e.preventDefault();
    this.userService.logoutUser();
    // this.user = null;

    this.router.navigate(['/auth/login']);
  }
}
