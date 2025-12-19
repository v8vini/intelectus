import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirDuvida } from './abrir-duvida';

describe('AbrirDuvida', () => {
  let component: AbrirDuvida;
  let fixture: ComponentFixture<AbrirDuvida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirDuvida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirDuvida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
