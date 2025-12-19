import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNota } from './add-nota';

describe('AddNota', () => {
  let component: AddNota;
  let fixture: ComponentFixture<AddNota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
