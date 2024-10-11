import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountStoreService {

  countSubhect = new BehaviorSubject(0)
  count$ = this.countSubhect.asObservable()

  constructor() { }

  setCount(count: number){
    this.countSubhect.next(count)
  }
}
