import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEaComponent } from './top-ea.component';

describe('TopEaComponent', () => {
  let component: TopEaComponent;
  let fixture: ComponentFixture<TopEaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopEaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
