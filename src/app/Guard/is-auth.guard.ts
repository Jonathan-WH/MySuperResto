import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { IsAuthService } from '../service/is-auth.service';



export const isAuthGuard: CanActivateFn = async (route, state) => {
   // using `inject` from Angular to inject Dependencie Services
   const service = inject(IsAuthService);
   // same with router
  const router = inject(Router);
   // and finaly retun Boolean to make it work.
   const isAuth = await service.isAuth();
   if (!isAuth) {
     // to do a redirection
     router.navigateByUrl('/404');
   }
   return isAuth;
};
