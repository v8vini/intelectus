import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDuvidas } from './list-duvidas';

describe('ListDuvidas', () => {
  let component: ListDuvidas;
  let fixture: ComponentFixture<ListDuvidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDuvidas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDuvidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
