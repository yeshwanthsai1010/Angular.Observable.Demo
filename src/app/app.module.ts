import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableSupplierComponent } from './observable-supplier/observable-supplier.component';
import { ObserverConsumerComponent } from './observer-consumer/observer-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
 
    ObserverConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ObservableSupplierComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
