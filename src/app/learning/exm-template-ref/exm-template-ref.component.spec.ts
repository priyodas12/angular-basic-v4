import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmTemplateRefComponent } from './exm-template-ref.component';

describe('ExmTemplateRefComponent', () => {
  let component: ExmTemplateRefComponent;
  let fixture: ComponentFixture<ExmTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmTemplateRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
