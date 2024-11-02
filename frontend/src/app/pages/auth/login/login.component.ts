import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    HttpClientModule
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

  constructor(private http: HttpClient, private userService: UserService) { } // Inject HttpClient

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('https://nest.monirsaikat.xyz/auth/login', userData).subscribe({
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
