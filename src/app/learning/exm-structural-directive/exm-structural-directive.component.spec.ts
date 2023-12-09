import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmStructuralDirectiveComponent } from './exm-structural-directive.component';

describe('ExmStructuralDirectiveComponent', () => {
  let component: ExmStructuralDirectiveComponent;
  let fixture: ComponentFixture<ExmStructuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmStructuralDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
