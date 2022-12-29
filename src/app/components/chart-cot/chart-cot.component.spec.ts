import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCotComponent } from './chart-cot.component';

describe('ChartCotComponent', () => {
  let component: ChartCotComponent;
  let fixture: ComponentFixture<ChartCotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
