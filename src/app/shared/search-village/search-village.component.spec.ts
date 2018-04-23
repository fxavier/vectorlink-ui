import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVillageComponent } from './search-village.component';

describe('SearchVillageComponent', () => {
  let component: SearchVillageComponent;
  let fixture: ComponentFixture<SearchVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
