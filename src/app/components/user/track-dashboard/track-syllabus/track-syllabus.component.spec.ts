import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSyllabusComponent } from './track-syllabus.component';

describe('TrackSyllabusComponent', () => {
  let component: TrackSyllabusComponent;
  let fixture: ComponentFixture<TrackSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
