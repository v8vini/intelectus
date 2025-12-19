import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtividades } from './list-atividades';

describe('ListAtividades', () => {
  let component: ListAtividades;
  let fixture: ComponentFixture<ListAtividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAtividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAtividades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
