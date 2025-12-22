import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { DesempenhoService } from '../../services/desempenho.service';

@Component({
  selector: 'app-desempenho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desempenho.html',
  styleUrls: ['./desempenho.css']
})
export class Desempenho implements OnInit, AfterViewInit {

  @ViewChild('grafico') canvas!: ElementRef<HTMLCanvasElement>;

  resumo!: {
    total: number;
    concluidas: number;
    pendentes: number;
    progresso: number;
  };

  chart?: Chart;

  constructor(private service: DesempenhoService) {}

  ngOnInit(): void {
    // ✅ service já existe aqui
    this.resumo = this.service.getResumo();
  }

  ngAfterViewInit(): void {
    if (this.resumo.total > 0) {
      this.criarGrafico();
    }
  }

  criarGrafico(): void {
    if (this.chart) {
      this.chart.destroy();
    }

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['Concluídas', 'Pendentes'],
        datasets: [
          {
            data: [
              this.resumo.concluidas,
              this.resumo.pendentes
            ]
          }
        ]
      }
    };

    this.chart = new Chart(this.canvas.nativeElement, config);
  }
}
