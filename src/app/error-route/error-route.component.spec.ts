import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRouteComponent } from './error-route.component';

describe('ErrorRouteComponent', () => {
  let component: ErrorRouteComponent;
  let fixture: ComponentFixture<ErrorRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
