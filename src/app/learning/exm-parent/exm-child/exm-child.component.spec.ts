import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmChildComponent } from './exm-child.component';

describe('ExmChildComponent', () => {
  let component: ExmChildComponent;
  let fixture: ComponentFixture<ExmChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
