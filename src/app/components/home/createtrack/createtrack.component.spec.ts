import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetrackComponent } from './createtrack.component';

describe('CreatetrackComponent', () => {
  let component: CreatetrackComponent;
  let fixture: ComponentFixture<CreatetrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
