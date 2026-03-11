import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {

  nombre: string = '';
  email: string = '';
  password: string = '';
  error: string = '';

  loading: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  private validate(): boolean {

    const nombre = this.nombre?.trim();
    const email = this.email?.trim();
    const password = this.password?.trim();

    if (!nombre) {
      this.error = 'El nombre es obligatorio';
      return false;
    }

    if (nombre.length < 2) {
      this.error = 'El nombre debe tener al menos 2 caracteres';
      return false;
    }

    if (nombre.length > 50) {
      this.error = 'El nombre es demasiado largo';
      return false;
    }

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

  async register() {

    this.error = '';

    if (!this.validate()) return;

    this.loading = true;

    try {

      await this.auth.register(
        this.nombre.trim(),
        this.email.trim(),
        this.password.trim()
      );

      await firstValueFrom(
        this.auth.user$.pipe(filter(u => !!u))
      );

      this.router.navigate(['/tabs/tabs/dashboard']);

    } catch (err: any) {

      this.error = err?.message || 'Error al registrarse';

    } finally {

      this.loading = false;

    }

  }

}
