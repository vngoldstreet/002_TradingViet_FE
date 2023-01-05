import { TestBed } from '@angular/core/testing';

import { MetasetService } from './metaset.service';

describe('MetasetService', () => {
  let service: MetasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
