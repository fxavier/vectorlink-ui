import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprayTotalsComponent } from './add-spray-totals.component';

describe('AddSprayTotalsComponent', () => {
  let component: AddSprayTotalsComponent;
  let fixture: ComponentFixture<AddSprayTotalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSprayTotalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSprayTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
