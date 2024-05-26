import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationWindowComponent } from './authorization-window.component';

describe('AuthorizationWindowComponent', () => {
  let component: AuthorizationWindowComponent;
  let fixture: ComponentFixture<AuthorizationWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthorizationWindowComponent]
    });
    fixture = TestBed.createComponent(AuthorizationWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
