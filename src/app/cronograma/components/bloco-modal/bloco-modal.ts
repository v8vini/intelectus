import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudyBlock } from '../../models/study-block.model';

@Component({
  selector: 'app-bloco-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bloco-modal.html',
  styleUrls: ['./bloco-modal.css']
})
export class BlocoModal {

  @Input() dia!: string;
  @Input() horario!: string;
  @Input() bloco: StudyBlock | null = null;

  @Output() salvarBloco = new EventEmitter<StudyBlock>();
  @Output() fechar = new EventEmitter<void>();

  disciplina = '';
  duracao = '';
  descricao = '';

  ngOnInit(): void {
    if (this.bloco) {
      this.disciplina = this.bloco.disciplina;
      this.duracao = this.bloco.duracao;
      this.descricao = this.bloco.descricao;
    }
  }

  salvar(): void {
    if (!this.disciplina || !this.duracao) return;

    const bloco: StudyBlock = {
      id: this.bloco?.id ?? Date.now(),
      dia: this.dia,
      horario: this.horario,
      disciplina: this.disciplina,
      duracao: this.duracao,
      descricao: this.descricao
    };

    this.salvarBloco.emit(bloco);
  }
}
