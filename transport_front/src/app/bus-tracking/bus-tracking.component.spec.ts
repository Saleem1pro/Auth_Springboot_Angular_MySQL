import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustrackingComponent } from './bus-tracking.component';

describe('BusTrackingComponent', () => {
  let component: BustrackingComponent;
  let fixture: ComponentFixture<BustrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BustrackingComponent]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(BustrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
