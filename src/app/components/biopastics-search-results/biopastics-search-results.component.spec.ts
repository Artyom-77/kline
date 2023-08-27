import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopasticsSearchResultsComponent } from './biopastics-search-results.component';

describe('BiopasticsSearchResultsComponent', () => {
  let component: BiopasticsSearchResultsComponent;
  let fixture: ComponentFixture<BiopasticsSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiopasticsSearchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopasticsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
