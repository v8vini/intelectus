import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarDuvida } from './comentar-duvida';

describe('ComentarDuvida', () => {
  let component: ComentarDuvida;
  let fixture: ComponentFixture<ComentarDuvida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentarDuvida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarDuvida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
