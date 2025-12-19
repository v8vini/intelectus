import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMaterial } from './visualizar-material';

describe('VisualizarMaterial', () => {
  let component: VisualizarMaterial;
  let fixture: ComponentFixture<VisualizarMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarMaterial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
