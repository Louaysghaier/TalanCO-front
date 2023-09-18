import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcullayoutComponent } from './calcullayout.component';

describe('CalcullayoutComponent', () => {
  let component: CalcullayoutComponent;
  let fixture: ComponentFixture<CalcullayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcullayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcullayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
