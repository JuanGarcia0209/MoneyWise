import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {

    return combineLatest([this.auth.ready$, this.auth.user$]).pipe(

      filter(([ready]) => ready === true),

      map(([_, user]) => {

        if (!user) return true;

        return this.router.parseUrl('/tabs/dashboard');

      })

    );

  }

}
