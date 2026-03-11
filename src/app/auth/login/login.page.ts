import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  email: string = '';
  password: string = '';
  error: string = '';

  loading: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  private validate(): boolean {

    const email = this.email?.trim();
    const password = this.password?.trim();

    if (!email) {
      this.error = 'El email es obligatorio';
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      this.error = 'El formato del email no es válido';
      return false;
    }

    if (!password) {
      this.error = 'La contraseña es obligatoria';
      return false;
    }

    if (password.length < 6) {
      this.error = 'La contraseña debe tener al menos 6 caracteres';
      return false;
    }

    if (password.length > 50) {
      this.error = 'La contraseña es demasiado larga';
      return false;
    }

    return true;
  }

  async login() {

    this.error = '';

    if (!this.validate()) {
      return;
    }

    this.loading = true;

    try {

      await this.auth.login(
        this.email.trim(),
        this.password.trim()
      );

      await firstValueFrom(
        this.auth.user$.pipe(filter(u => !!u))
      );

      this.router.navigate(['/tabs/tabs/dashboard']);

    } catch (err: any) {

      this.error = err?.message || 'Error al iniciar sesión';

    } finally {

      this.loading = false;

    }

  }

}
