/**
 * @description 本地缓存服务
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string, defaultValue?: any): any {
    let result = window.localStorage.getItem(key);

    if (result === null) {
      return defaultValue ? defaultValue : null;
    } else {
      try {
        return JSON.parse(result);
      } catch (e) {
        return result;
      }
    }
  }

  clear(): void {
    window.localStorage.clear();
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  setSessionStorage(key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }

  getSessionStorage(key: string, defaultValue?: any) {
    let result = window.sessionStorage.getItem(key);

    if (result === null) {
      return defaultValue ? defaultValue : null;
    } else {
      try {
        return JSON.parse(result);
      } catch (e) {
        return result;
      }
    }
  }

  clearSessionStorage(): void {
    window.sessionStorage.clear();
  }

  clearSessionStorageByKey(key: string): void {
    window.sessionStorage.removeItem(key);
  }
}
