import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  {
    path: 'user',
    canActivateChild: [authGuard], // Protects all child routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
];
