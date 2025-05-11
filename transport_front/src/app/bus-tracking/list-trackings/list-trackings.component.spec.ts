import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrackingsComponent } from './list-trackings.component';

describe('ListTrackingsComponent', () => {
  let component: ListTrackingsComponent;
  let fixture: ComponentFixture<ListTrackingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTrackingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTrackingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
