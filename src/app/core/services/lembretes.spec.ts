import { TestBed } from '@angular/core/testing';

import { Lembretes } from './lembretes';

describe('Lembretes', () => {
  let service: Lembretes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lembretes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
