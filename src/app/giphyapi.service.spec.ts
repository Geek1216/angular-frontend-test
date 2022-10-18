import { TestBed } from '@angular/core/testing';

import { GiphyapiService } from './giphyapi.service';

describe('GiphyapiService', () => {
  let service: GiphyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
