import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoEstudo } from './bloco-estudo';

describe('BlocoEstudo', () => {
  let component: BlocoEstudo;
  let fixture: ComponentFixture<BlocoEstudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoEstudo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoEstudo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
