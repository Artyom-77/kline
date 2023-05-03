import { TestBed } from '@angular/core/testing';

import { RrboService } from './rrbo.service';

describe('RrboService', () => {
  let service: RrboService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RrboService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
