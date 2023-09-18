import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrptranspComponent } from './entrptransp.component';

describe('EntrptranspComponent', () => {
  let component: EntrptranspComponent;
  let fixture: ComponentFixture<EntrptranspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrptranspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrptranspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
