import { TestBed } from '@angular/core/testing';

import { HistorialDeCasosService } from './historial-de-casos.service';

describe('HistorialDeCasosService', () => {
  let service: HistorialDeCasosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialDeCasosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
