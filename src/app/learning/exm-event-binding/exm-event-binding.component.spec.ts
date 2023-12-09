import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmEventBindingComponent } from './exm-event-binding.component';

describe('ExmEventBindingComponent', () => {
  let component: ExmEventBindingComponent;
  let fixture: ComponentFixture<ExmEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmEventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
