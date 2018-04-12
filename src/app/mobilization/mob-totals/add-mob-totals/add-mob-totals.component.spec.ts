import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobTotalsComponent } from './add-mob-totals.component';

describe('AddMobTotalsComponent', () => {
  let component: AddMobTotalsComponent;
  let fixture: ComponentFixture<AddMobTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
