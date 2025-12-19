import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtividade } from './add-atividade';

describe('AddAtividade', () => {
  let component: AddAtividade;
  let fixture: ComponentFixture<AddAtividade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAtividade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAtividade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
