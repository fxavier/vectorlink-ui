import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprayDetailsComponent } from './add-spray-details.component';

describe('AddSprayDetailsComponent', () => {
  let component: AddSprayDetailsComponent;
  let fixture: ComponentFixture<AddSprayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSprayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSprayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
