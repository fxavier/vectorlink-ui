import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistritosComponent } from './add-distritos.component';

describe('AddDistritosComponent', () => {
  let component: AddDistritosComponent;
  let fixture: ComponentFixture<AddDistritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
