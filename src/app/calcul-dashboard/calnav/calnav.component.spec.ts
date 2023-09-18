import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalnavComponent } from './calnav.component';

describe('CalnavComponent', () => {
  let component: CalnavComponent;
  let fixture: ComponentFixture<CalnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
