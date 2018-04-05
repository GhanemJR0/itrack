import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulartracksComponent } from './populartracks.component';

describe('PopulartracksComponent', () => {
  let component: PopulartracksComponent;
  let fixture: ComponentFixture<PopulartracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulartracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulartracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
