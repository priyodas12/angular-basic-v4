import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmSibingsCommunicationComponent } from './exm-sibings-communication.component';

describe('ExmSibingsCommunicationComponent', () => {
  let component: ExmSibingsCommunicationComponent;
  let fixture: ComponentFixture<ExmSibingsCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmSibingsCommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmSibingsCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
