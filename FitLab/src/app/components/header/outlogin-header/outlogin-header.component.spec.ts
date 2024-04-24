import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutloginHeaderComponent } from './outlogin-header.component';

describe('OutloginHeaderComponent', () => {
  let component: OutloginHeaderComponent;
  let fixture: ComponentFixture<OutloginHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OutloginHeaderComponent]
    });
    fixture = TestBed.createComponent(OutloginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
