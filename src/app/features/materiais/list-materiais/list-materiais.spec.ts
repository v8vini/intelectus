import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMateriais } from './list-materiais';

describe('ListMateriais', () => {
  let component: ListMateriais;
  let fixture: ComponentFixture<ListMateriais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMateriais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMateriais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
