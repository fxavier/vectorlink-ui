import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOpSitesComponent } from './add-op-sites.component';

describe('AddOpSitesComponent', () => {
  let component: AddOpSitesComponent;
  let fixture: ComponentFixture<AddOpSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOpSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOpSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
