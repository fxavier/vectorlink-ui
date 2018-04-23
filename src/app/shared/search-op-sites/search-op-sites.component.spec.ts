import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOpSitesComponent } from './search-op-sites.component';

describe('SearchOpSitesComponent', () => {
  let component: SearchOpSitesComponent;
  let fixture: ComponentFixture<SearchOpSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOpSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOpSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
