import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoEstudoModal } from './bloco-estudo-modal';

describe('BlocoEstudoModal', () => {
  let component: BlocoEstudoModal;
  let fixture: ComponentFixture<BlocoEstudoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoEstudoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoEstudoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
