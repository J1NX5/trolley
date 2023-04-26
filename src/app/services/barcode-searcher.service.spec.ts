import { TestBed } from '@angular/core/testing';

import { BarcodeSearcherService } from './barcode-searcher.service';

describe('BarcodeSearcherService', () => {
  let service: BarcodeSearcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeSearcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
