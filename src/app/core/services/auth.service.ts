import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private authKey = 'usuario_logueado';
  private usersKey = 'usuarios_registrados';

  private _user = new BehaviorSubject<User | null>(null);
  private _ready = new BehaviorSubject<boolean>(false);

  public ready$ = this._ready.asObservable();
  public user$ = this._user.asObservable();

  constructor(private storage: StorageService) {
    this.loadUser();
  }

  private async loadUser() {
    try {

      const user = await this.storage.get(this.authKey);

      if (user) {
        this._user.next(user);
      }

    } catch (error) {
      console.error('Error cargando usuario', error);
    }

    this._ready.next(true);
  }

  async login(email: string, password: string) {

    if (!email || !password) {
      throw new Error('Email y contraseña obligatorios');
    }

    email = email.trim().toLowerCase();
    password = password.trim();

    const users: User[] = (await this.storage.get(this.usersKey)) || [];

    const user = users.find(u => u.email === email);

    if (!user) {
      throw new Error('El usuario no existe');
    }

    if (user.password !== password) {
      throw new Error('Contraseña incorrecta');
    }

    await this.storage.set(this.authKey, user);

    this._user.next(user);

    return user;
  }

  async register(nombre: string, email: string, password: string) {

    if (!nombre || !email || !password) {
      throw new Error('Todos los campos son obligatorios');
    }

    nombre = nombre.trim();
    email = email.trim().toLowerCase();
    password = password.trim();

    const users: User[] = (await this.storage.get(this.usersKey)) || [];

    const exists = users.find(u => u.email === email);

    if (exists) {
      throw new Error('El email ya está registrado');
    }

    const user: User = {
      id: Date.now().toString(),
      nombre,
      email,
      password
    };

    users.push(user);

    await this.storage.set(this.usersKey, users);

    await this.storage.set(this.authKey, user);

    this._user.next(user);

    return user;
  }

  async logout() {

    this._user.next(null);

    await this.storage.remove(this.authKey);

  }

  get user() {
    return this._user.value;
  }

  get isAuthenticated() {
    return !!this._user.value;
  }

}
