import { TestBed } from '@angular/core/testing';

import { UserDashBoardGuard } from './user-dash-board.guard';

describe('UserDashBoardGuard', () => {
  let guard: UserDashBoardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserDashBoardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
