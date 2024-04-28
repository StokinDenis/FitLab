import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessServicesPageComponent } from './fitness-services-page.component';

describe('FitnessServicesPageComponent', () => {
  let component: FitnessServicesPageComponent;
  let fixture: ComponentFixture<FitnessServicesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FitnessServicesPageComponent]
    });
    fixture = TestBed.createComponent(FitnessServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
