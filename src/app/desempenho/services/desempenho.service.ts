import { Injectable } from '@angular/core';
import { AtividadesService } from '../../atividades/services/atividade.service';

@Injectable({
  providedIn: 'root'
})
export class DesempenhoService {

  constructor(private atividadesService: AtividadesService) {}

  getResumo() {
    const atividades = this.atividadesService.getAll();

    const concluidas = atividades.filter(a => a.concluida).length;
    const pendentes = atividades.filter(a => !a.concluida).length;
    const total = atividades.length;

    const progresso = total > 0
      ? Math.round((concluidas / total) * 100)
      : 0;

    return { total, concluidas, pendentes, progresso };
  }
}
