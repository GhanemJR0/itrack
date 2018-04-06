import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuggestedLinksComponent } from './add-suggested-links.component';

describe('AddSuggestedLinksComponent', () => {
  let component: AddSuggestedLinksComponent;
  let fixture: ComponentFixture<AddSuggestedLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuggestedLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuggestedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
