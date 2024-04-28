import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitMapComponent } from './fit-map.component';

describe('FitMapComponent', () => {
  let component: FitMapComponent;
  let fixture: ComponentFixture<FitMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FitMapComponent]
    });
    fixture = TestBed.createComponent(FitMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
