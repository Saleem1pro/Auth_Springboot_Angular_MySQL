import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfosComponent } from './add-infos.component';

describe('AddInfosComponent', () => {
  let component: AddInfosComponent;
  let fixture: ComponentFixture<AddInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
