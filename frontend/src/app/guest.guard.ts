import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guestGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');

  if (!token) return true;

  router.navigate(['/user/dashboard']);
  return false;
};
