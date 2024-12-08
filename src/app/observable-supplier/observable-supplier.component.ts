import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable
export class ObservableSupplierComponent {
  demoObservable = new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);

  });
  constructor(){}
}
