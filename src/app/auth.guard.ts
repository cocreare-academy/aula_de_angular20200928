import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let credentials = localStorage.getItem('credentials')

      console.log("Credenciais:", credentials)
      if (credentials) {
        credentials = JSON.parse(credentials)
        console.log(credentials)
        return true;
      }
      this.router.navigateByUrl('/login')
      return false;
  }
  
}
