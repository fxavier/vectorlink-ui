import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobDetailsComponent } from './add-mob-details.component';

describe('AddMobDetailsComponent', () => {
  let component: AddMobDetailsComponent;
  let fixture: ComponentFixture<AddMobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
