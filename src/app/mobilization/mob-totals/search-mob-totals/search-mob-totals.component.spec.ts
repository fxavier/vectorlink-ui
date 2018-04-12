import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMobTotalsComponent } from './search-mob-totals.component';

describe('SearchMobTotalsComponent', () => {
  let component: SearchMobTotalsComponent;
  let fixture: ComponentFixture<SearchMobTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMobTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMobTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
