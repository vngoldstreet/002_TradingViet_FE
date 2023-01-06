import { TestBed } from '@angular/core/testing';

import { Socket2Service } from './socket2.service';

describe('Socket2Service', () => {
  let service: Socket2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Socket2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
