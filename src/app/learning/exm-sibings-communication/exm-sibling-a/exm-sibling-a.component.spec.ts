import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmSiblingAComponent } from './exm-sibling-a.component';

describe('ExmSiblingAComponent', () => {
  let component: ExmSiblingAComponent;
  let fixture: ComponentFixture<ExmSiblingAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmSiblingAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmSiblingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
