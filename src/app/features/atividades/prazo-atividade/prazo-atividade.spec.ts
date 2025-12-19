import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoAtividade } from './prazo-atividade';

describe('PrazoAtividade', () => {
  let component: PrazoAtividade;
  let fixture: ComponentFixture<PrazoAtividade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrazoAtividade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrazoAtividade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
