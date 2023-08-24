/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BioplasticsMarketMonitorComponent } from './bioplasticsMarketMonitor.component';

describe('BioplasticsMarketMonitorComponent', () => {
  let component: BioplasticsMarketMonitorComponent;
  let fixture: ComponentFixture<BioplasticsMarketMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioplasticsMarketMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioplasticsMarketMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
