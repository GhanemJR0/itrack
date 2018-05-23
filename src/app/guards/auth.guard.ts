import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (public DS: DataService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.DS.token) {
        return true;
      } else {
        this.router.navigate(['user/login']);
        return false;
      }
  }
}
