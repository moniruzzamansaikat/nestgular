import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');

  if (token) return true;

  // Redirect to login if no token
  router.navigate(['/auth/login']);
  return false;
};
