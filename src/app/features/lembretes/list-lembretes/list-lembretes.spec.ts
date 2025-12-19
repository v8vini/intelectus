import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLembretes } from './list-lembretes';

describe('ListLembretes', () => {
  let component: ListLembretes;
  let fixture: ComponentFixture<ListLembretes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLembretes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLembretes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
