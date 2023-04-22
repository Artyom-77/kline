import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioBasestocksComponent } from './bio-basestocks.component';

describe('BioBasestocksComponent', () => {
  let component: BioBasestocksComponent;
  let fixture: ComponentFixture<BioBasestocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioBasestocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioBasestocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
