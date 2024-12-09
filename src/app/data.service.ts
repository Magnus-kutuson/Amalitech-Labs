import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    return localStorage.getItem(key);
  }
}
