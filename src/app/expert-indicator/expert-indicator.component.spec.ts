import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertIndicatorComponent } from './expert-indicator.component';

describe('ExpertIndicatorComponent', () => {
  let component: ExpertIndicatorComponent;
  let fixture: ComponentFixture<ExpertIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
