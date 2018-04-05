import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksheaderComponent } from './tracksheader.component';

describe('TracksheaderComponent', () => {
  let component: TracksheaderComponent;
  let fixture: ComponentFixture<TracksheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
