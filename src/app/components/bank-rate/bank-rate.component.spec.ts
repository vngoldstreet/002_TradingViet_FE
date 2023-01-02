import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRateComponent } from './bank-rate.component';

describe('BankRateComponent', () => {
  let component: BankRateComponent;
  let fixture: ComponentFixture<BankRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
