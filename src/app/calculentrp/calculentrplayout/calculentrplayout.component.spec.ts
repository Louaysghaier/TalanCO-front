import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculentrplayoutComponent } from './calculentrplayout.component';

describe('CalculentrplayoutComponent', () => {
  let component: CalculentrplayoutComponent;
  let fixture: ComponentFixture<CalculentrplayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculentrplayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculentrplayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
