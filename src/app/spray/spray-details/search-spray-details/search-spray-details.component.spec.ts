import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSprayDetailsComponent } from './search-spray-details.component';

describe('SearchSprayDetailsComponent', () => {
  let component: SearchSprayDetailsComponent;
  let fixture: ComponentFixture<SearchSprayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSprayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSprayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
