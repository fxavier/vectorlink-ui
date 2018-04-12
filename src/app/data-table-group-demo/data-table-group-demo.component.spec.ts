import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableGroupDemoComponent } from './data-table-group-demo.component';

describe('DataTableGroupDemoComponent', () => {
  let component: DataTableGroupDemoComponent;
  let fixture: ComponentFixture<DataTableGroupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableGroupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableGroupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
