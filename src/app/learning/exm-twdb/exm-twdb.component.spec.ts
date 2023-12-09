import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmTwdbComponent } from './exm-twdb.component';

describe('ExmTwdbComponent', () => {
  let component: ExmTwdbComponent;
  let fixture: ComponentFixture<ExmTwdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmTwdbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmTwdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
