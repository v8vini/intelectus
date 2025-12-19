import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotas } from './list-notas';

describe('ListNotas', () => {
  let component: ListNotas;
  let fixture: ComponentFixture<ListNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListNotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNotas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
