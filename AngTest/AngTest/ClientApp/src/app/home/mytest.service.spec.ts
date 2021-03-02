import { TestBed } from '@angular/core/testing';

import { MYtestService } from './mytest.service';

describe('MYtestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MYtestService = TestBed.get(MYtestService);
    expect(service).toBeTruthy();
  });
});
