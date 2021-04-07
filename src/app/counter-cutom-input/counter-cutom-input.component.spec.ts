import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCutomInputComponent } from './counter-cutom-input.component';

describe('CounterCutomInputComponent', () => {
  let component: CounterCutomInputComponent;
  let fixture: ComponentFixture<CounterCutomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCutomInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCutomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
