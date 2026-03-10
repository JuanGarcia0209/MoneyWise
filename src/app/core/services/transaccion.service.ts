import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Transaccion } from '../models/transaccion.model';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  private key = 'transacciones';
  private _transacciones = new BehaviorSubject<Transaccion[]>([]);
  public transacciones$ = this._transacciones.asObservable();

  constructor(private storage: StorageService) { this.load(); }

  private async load() {
    const list = await this.storage.get(this.key) || [];
    this._transacciones.next(list);
  }

  async add(transaccion: Transaccion) {
    const list = [...this._transacciones.value, { ...transaccion, id: Date.now().toString() }];
    await this.storage.set(this.key, list);
    this._transacciones.next(list);
  }

  async update(transaccion: Transaccion) {
    const list = this._transacciones.value.map(t => t.id === transaccion.id ? transaccion : t);
    await this.storage.set(this.key, list);
    this._transacciones.next(list);
  }

  async delete(id: string) {
    const list = this._transacciones.value.filter(t => t.id !== id);
    await this.storage.set(this.key, list);
    this._transacciones.next(list);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Transaccion } from '../models/transaccion.model';
// import { StorageService } from './storage.service';

// @Injectable({ providedIn: 'root' })
// export class TransaccionService {
//   private key = 'transacciones';
//   private _transacciones = new BehaviorSubject<Transaccion[]>([]);
//   public transacciones$ = this._transacciones.asObservable();

//   constructor(private storage: StorageService) { this.load(); }

//   private async load() {
//     const list = await this.storage.get(this.key) || [];
//     this._transacciones.next(list);
//   }

//   async add(transaccion: Transaccion) {
//     const list = [...this._transacciones.value, { ...transaccion, id: Date.now().toString() }];
//     await this.storage.set(this.key, list);
//     this._transacciones.next(list);
//   }

//   async update(transaccion: Transaccion) {
//     const list = this._transacciones.value.map(t => t.id === transaccion.id ? transaccion : t);
//     await this.storage.set(this.key, list);
//     this._transacciones.next(list);
//   }

//   async delete(id: string) {
//     const list = this._transacciones.value.filter(t => t.id !== id);
//     await this.storage.set(this.key, list);
//     this._transacciones.next(list);
//   }
// }
