import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotCftcComponent } from './cot-cftc.component';

describe('CotCftcComponent', () => {
  let component: CotCftcComponent;
  let fixture: ComponentFixture<CotCftcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotCftcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotCftcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
