import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routhGuard } from './routh.guard';

describe('routhGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routhGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
