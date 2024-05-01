import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessTrainerPgeComponent } from './fitness-trainer-pge.component';

describe('FitnessTrainerPgeComponent', () => {
  let component: FitnessTrainerPgeComponent;
  let fixture: ComponentFixture<FitnessTrainerPgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FitnessTrainerPgeComponent]
    });
    fixture = TestBed.createComponent(FitnessTrainerPgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
