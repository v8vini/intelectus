import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaSemanal } from './cronograma-semanal';

describe('CronogramaSemanal', () => {
  let component: CronogramaSemanal;
  let fixture: ComponentFixture<CronogramaSemanal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronogramaSemanal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronogramaSemanal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
