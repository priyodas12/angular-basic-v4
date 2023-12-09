import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmParentComponent } from './exm-parent.component';

describe('ExmParentComponent', () => {
  let component: ExmParentComponent;
  let fixture: ComponentFixture<ExmParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
