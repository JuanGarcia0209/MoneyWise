// import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage-angular';

// @Injectable({ providedIn: 'root' })
// export class StorageService {
//   private _storage!: Storage;

//   constructor(private storage: Storage) { this.init(); }

//   async init() { this._storage = await this.storage.create(); }

//   set(key: string, value: any) { return this._storage.set(key, value); }
//   get(key: string) { return this._storage.get(key); }
//   remove(key: string) { return this._storage.remove(key); }
//   clear() { return this._storage.clear(); }
// }

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage?: Storage;
  private readonly STORAGE_NAME = '__moneywise_storage_v1';

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    try {
      this._storage = await this.storage.create();
    } catch (err) {
      console.error('Storage initialization failed', err);
    }
  }

  async set<T = any>(key: string, value: T): Promise<void> {
    if (!this._storage) await this.init();
    return this._storage!.set(`${this.STORAGE_NAME}:${key}`, value);
  }

  async get<T = any>(key: string): Promise<T | null> {
    if (!this._storage) await this.init();
    return (await this._storage!.get(`${this.STORAGE_NAME}:${key}`)) ?? null;
  }

  async remove(key: string): Promise<void> {
    if (!this._storage) await this.init();
    return this._storage!.remove(`${this.STORAGE_NAME}:${key}`);
  }

  async clear(): Promise<void> {
    if (!this._storage) await this.init();
    await this._storage!.clear();
  }
}
