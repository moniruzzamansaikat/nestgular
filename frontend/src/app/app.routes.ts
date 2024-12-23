import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { DepositLogComponent } from './pages/deposit/deposit-log/deposit-log.component';
import { NewDepositComponent } from './pages/deposit/new-deposit/new-deposit.component';
import { guestGuard } from './guards/guest.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'auth/register', component: RegisterComponent, canActivate: [guestGuard] },
  {
    path: 'user',
    redirectTo: 'user/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'user',
    canActivateChild: [authGuard], // Protects all child routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'deposit/log', component: DepositLogComponent },
      { path: 'deposit/new-deposit', component: NewDepositComponent },
    ],
  },
];
