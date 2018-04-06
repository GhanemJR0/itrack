import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedLinksComponent } from './suggested-links.component';

describe('SuggestedLinksComponent', () => {
  let component: SuggestedLinksComponent;
  let fixture: ComponentFixture<SuggestedLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
