import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { CardModule } from 'primeng/card'

@Component({
  selector: 'app-login',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    HttpClientModule,
    CardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = "Login";
  email = '';
  username = '';
  password = '';
  router = inject(Router);
  loggingIn: boolean = false;

  constructor(private http: HttpClient, private userService: UserService) { } // Inject HttpClient

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/auth/login', userData).subscribe({
      next: (response: any) => {
        console.log('User logged in successfully:', response);
        localStorage.setItem('accessToken', response?.accessToken);
        console.log('User logged in successfully:', response);
        this.userService.setUser(response);
        this.router.navigate(['user/dashboard']);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }
}
