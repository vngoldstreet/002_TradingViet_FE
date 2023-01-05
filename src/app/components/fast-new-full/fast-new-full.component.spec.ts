import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastNewFullComponent } from './fast-new-full.component';

describe('FastNewFullComponent', () => {
  let component: FastNewFullComponent;
  let fixture: ComponentFixture<FastNewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastNewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastNewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
