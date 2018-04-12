import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSprayTotalsComponent } from './search-spray-totals.component';

describe('SearchSprayTotalsComponent', () => {
  let component: SearchSprayTotalsComponent;
  let fixture: ComponentFixture<SearchSprayTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSprayTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSprayTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
