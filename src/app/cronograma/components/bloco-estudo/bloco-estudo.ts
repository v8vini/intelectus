import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bloco-estudo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloco-estudo.html',
  styleUrls: ['./bloco-estudo.css'],
})
export class BlocoEstudo {

  @Input() disciplina!: string;
  @Input() horario!: string;
  @Input() descricao!: string;

}
