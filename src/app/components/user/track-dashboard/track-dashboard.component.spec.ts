import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDashboardComponent } from './track-dashboard.component';

describe('TrackDashboardComponent', () => {
  let component: TrackDashboardComponent;
  let fixture: ComponentFixture<TrackDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
