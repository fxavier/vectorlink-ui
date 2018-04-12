import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMobDetailsComponent } from './search-mob-details.component';

describe('SearchMobDetailsComponent', () => {
  let component: SearchMobDetailsComponent;
  let fixture: ComponentFixture<SearchMobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
