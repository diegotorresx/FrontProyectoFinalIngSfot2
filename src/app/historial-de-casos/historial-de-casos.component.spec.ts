import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeCasosComponent } from './historial-de-casos.component';

describe('HistorialDeCasosComponent', () => {
  let component: HistorialDeCasosComponent;
  let fixture: ComponentFixture<HistorialDeCasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialDeCasosComponent]
    });
    fixture = TestBed.createComponent(HistorialDeCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
