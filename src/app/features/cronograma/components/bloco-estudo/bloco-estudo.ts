import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyBlock } from '../../../../core/models/study-block';

@Component({
  selector: 'app-bloco-estudo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bloco-estudo.html',
  styleUrls: ['./bloco-estudo.css']
})
export class BlocoEstudo {
  @Input({ required: true }) block!: StudyBlock;
  @Output() select = new EventEmitter<StudyBlock>();

  onClick() {
    this.select.emit(this.block);
  }
}
