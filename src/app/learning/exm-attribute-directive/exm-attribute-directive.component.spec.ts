import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmAttributeDirectiveComponent } from './exm-attribute-directive.component';

describe('ExmAttributeDirectiveComponent', () => {
  let component: ExmAttributeDirectiveComponent;
  let fixture: ComponentFixture<ExmAttributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmAttributeDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
