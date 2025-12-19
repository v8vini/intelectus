import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLembrete } from './add-lembrete';

describe('AddLembrete', () => {
  let component: AddLembrete;
  let fixture: ComponentFixture<AddLembrete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLembrete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLembrete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
