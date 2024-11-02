import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, NgZone, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CardModule } from 'primeng/card'
import { SetTitle, TitleService } from '../../../services/title.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

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
    CardModule,
    ToastModule, 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss', 
})
@SetTitle("Login")
export class LoginComponent {
  title = "Login";
  email = '';
  username = '';
  password = '';
  router = inject(Router);
  loggingIn: boolean = false;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private titleService: TitleService,
    private messageService: MessageService,
  ) { } // Inject HttpClient

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
        this.username = '';
        this.password = '';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You are logged in!' });
        this.router.navigate(['user/dashboard']);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }
}
