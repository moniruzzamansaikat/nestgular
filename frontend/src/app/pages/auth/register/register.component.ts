import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SetTitle, TitleService } from '../../../services/title.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
@SetTitle("Register")
export class RegisterComponent {
  email = '';
  username = '';
  password = '';

  constructor(private http: HttpClient, private titleService: TitleService) { } // Inject HttpClient

  onSubmit() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/auth/register', userData).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
