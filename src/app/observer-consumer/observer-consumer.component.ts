import { Component } from '@angular/core';
import { ObservableSupplierComponent } from '../observable-supplier/observable-supplier.component';

@Component({
  selector: 'app-observer-consumer',
  templateUrl: './observer-consumer.component.html',
  styleUrls: ['./observer-consumer.component.scss']
})
export class ObserverConsumerComponent {
  
  ngOnIt(){
    this.observableSupplier.demoObservable.subscribe((val)=>{
      console.log(val);
    })
  }

  constructor(observableSupplier:ObservableSupplierComponent){
  }
}
