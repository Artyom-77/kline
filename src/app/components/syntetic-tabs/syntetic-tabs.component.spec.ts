import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynteticTabsComponent } from './syntetic-tabs.component';

describe('SynteticTabsComponent', () => {
  let component: SynteticTabsComponent;
  let fixture: ComponentFixture<SynteticTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynteticTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynteticTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
