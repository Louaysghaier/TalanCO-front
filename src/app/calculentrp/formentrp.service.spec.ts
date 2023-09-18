import { TestBed } from '@angular/core/testing';

import { FormentrpService } from './formentrp.service';

describe('FormentrpService', () => {
  let service: FormentrpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormentrpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
