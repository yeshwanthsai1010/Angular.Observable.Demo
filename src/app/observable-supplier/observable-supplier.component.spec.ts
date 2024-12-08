import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSupplierComponent } from './observable-supplier.component';

describe('ObservableSupplierComponent', () => {
  let component: ObservableSupplierComponent;
  let fixture: ComponentFixture<ObservableSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
