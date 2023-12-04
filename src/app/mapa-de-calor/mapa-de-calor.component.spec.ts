import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeCalorComponent } from './mapa-de-calor.component';

describe('MapaDeCalorComponent', () => {
  let component: MapaDeCalorComponent;
  let fixture: ComponentFixture<MapaDeCalorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaDeCalorComponent]
    });
    fixture = TestBed.createComponent(MapaDeCalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
