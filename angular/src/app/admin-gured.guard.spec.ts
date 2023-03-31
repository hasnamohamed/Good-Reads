import { TestBed } from '@angular/core/testing';

import { AdminGuredGuard } from './admin-gured.guard';

describe('AdminGuredGuard', () => {
  let guard: AdminGuredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
