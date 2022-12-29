import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFedComponent } from './chart-fed.component';

describe('ChartFedComponent', () => {
  let component: ChartFedComponent;
  let fixture: ComponentFixture<ChartFedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
