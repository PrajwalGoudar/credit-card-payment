import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCardPaymentDataComponent } from './read-card-payment-data.component';

describe('ReadCardPaymentDataComponent', () => {
  let component: ReadCardPaymentDataComponent;
  let fixture: ComponentFixture<ReadCardPaymentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadCardPaymentDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCardPaymentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
