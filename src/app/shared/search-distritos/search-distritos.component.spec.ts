import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDistritosComponent } from './search-distritos.component';

describe('SearchDistritosComponent', () => {
  let component: SearchDistritosComponent;
  let fixture: ComponentFixture<SearchDistritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDistritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDistritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
