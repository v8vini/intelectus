import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyBlock } from '../../../../core/models/study-block';
import { CronogramaService } from '../../../../core/services/cronograma-service';

import { BlocoEstudo } from '../../components/bloco-estudo/bloco-estudo';
import { BlocoEstudoModal } from '../../components/bloco-estudo-modal/bloco-estudo-modal';

@Component({
  selector: 'cronograma-semanal',
  standalone: true,
  imports: [
    CommonModule,
    BlocoEstudo,
    BlocoEstudoModal
  ],
  templateUrl: './cronograma-semanal.html',
  styleUrls: ['./cronograma-semanal.css']
})
export class CronogramaSemanal implements OnInit {

  blocks: StudyBlock[] = [];
  selectedBlock: StudyBlock | null = null;

  days = [
    { id: 1, label: 'Segunda' },
    { id: 2, label: 'Terça' },
    { id: 3, label: 'Quarta' },
    { id: 4, label: 'Quinta' },
    { id: 5, label: 'Sexta' }
  ];

  constructor(private cronogramaService: CronogramaService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.cronogramaService.getWeekly().subscribe(data => {
      this.blocks = data;
    });
  }

  byDay(day: number) {
    return this.blocks.filter(b => b.day_of_week === day);
  }

  openBlock(block: StudyBlock) {
    this.selectedBlock = { ...block };
  }

  closeModal() {
    this.selectedBlock = null;
    this.load();
  }
}
