import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudyBlock } from '../../../../core/models/study-block';
import { CronogramaService } from '../../../../core/services/cronograma-service';

@Component({
  selector: 'app-bloco-estudo-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bloco-estudo-modal.html',
  styleUrls: ['./bloco-estudo-modal.css']
})
export class BlocoEstudoModal {

  @Input({ required: true }) block!: StudyBlock;
  @Output() close = new EventEmitter<void>();

  constructor(private cronogramaService: CronogramaService) {}

  save() {
    if (this.block.id) {
      this.cronogramaService.update(this.block.id, this.block)
        .subscribe(() => this.close.emit());
    } else {
      this.cronogramaService.create(this.block)
        .subscribe(() => this.close.emit());
    }
  }

  delete() {
    if (!this.block.id) return;
    this.cronogramaService.delete(this.block.id)
      .subscribe(() => this.close.emit());
  }
}
