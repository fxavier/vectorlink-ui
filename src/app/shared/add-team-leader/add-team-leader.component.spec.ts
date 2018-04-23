import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamLeaderComponent } from './add-team-leader.component';

describe('AddTeamLeaderComponent', () => {
  let component: AddTeamLeaderComponent;
  let fixture: ComponentFixture<AddTeamLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
