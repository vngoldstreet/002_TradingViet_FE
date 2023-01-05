import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCotDataComponent } from './home-cot-data.component';

describe('HomeCotDataComponent', () => {
  let component: HomeCotDataComponent;
  let fixture: ComponentFixture<HomeCotDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCotDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCotDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
