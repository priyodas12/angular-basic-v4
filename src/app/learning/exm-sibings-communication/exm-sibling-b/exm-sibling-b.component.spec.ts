import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmSiblingBComponent } from './exm-sibling-b.component';

describe('ExmSiblingBComponent', () => {
  let component: ExmSiblingBComponent;
  let fixture: ComponentFixture<ExmSiblingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmSiblingBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmSiblingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
