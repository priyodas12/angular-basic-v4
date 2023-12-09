import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmPropertyBindingComponent } from './exm-property-binding.component';

describe('ExmPropertyBindingComponent', () => {
  let component: ExmPropertyBindingComponent;
  let fixture: ComponentFixture<ExmPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmPropertyBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
