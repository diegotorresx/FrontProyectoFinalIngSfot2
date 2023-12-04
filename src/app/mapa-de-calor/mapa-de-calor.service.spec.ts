import { TestBed } from '@angular/core/testing';

import { MapaDeCalorService } from './mapa-de-calor.service';

describe('MapaDeCalorService', () => {
  let service: MapaDeCalorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapaDeCalorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
