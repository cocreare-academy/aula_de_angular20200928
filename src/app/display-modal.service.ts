import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayModalService {
  showNotFound:Observable<boolean>

  constructor() { 
    this.showSubject = new Subject<boolean>();
    this.showNotFound = this.showSubject.asObservable();
    this.showSubject.next(false)
  }

  private showSubject: Subject<boolean>
  mudarValor(valor) {
    this.showSubject.next(valor)
    return valor
  }

  getShowNotFound() {
    return this.showNotFound
  }

}
