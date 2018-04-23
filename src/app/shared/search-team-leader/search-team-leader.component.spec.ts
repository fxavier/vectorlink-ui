import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeamLeaderComponent } from './search-team-leader.component';

describe('SearchTeamLeaderComponent', () => {
  let component: SearchTeamLeaderComponent;
  let fixture: ComponentFixture<SearchTeamLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTeamLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
