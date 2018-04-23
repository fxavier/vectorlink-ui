import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSopComponent } from './search-sop.component';

describe('SearchSopComponent', () => {
  let component: SearchSopComponent;
  let fixture: ComponentFixture<SearchSopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
