import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineInfosComponent } from './line-infos.component';

describe('LineInfosComponent', () => {
  let component: LineInfosComponent;
  let fixture: ComponentFixture<LineInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
