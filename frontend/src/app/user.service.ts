import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.initializeUserFromToken();
  }

  setUser(user: any) {
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.getValue();
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    this.setUser(null);
  }

  initializeUserFromToken() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const user = {accessToken: 'token'};
        this.setUser(user);
      } catch (error) {
        localStorage.removeItem('accessToken');
      }
    }
  }
}
