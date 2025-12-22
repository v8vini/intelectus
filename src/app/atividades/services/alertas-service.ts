import { Injectable } from '@angular/core';
import { AtividadesService } from './atividade.service';
import { Atividade } from '../models/atividade.model';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  // Quantos dias antes do prazo o alerta aparece
  private LIMITE_DIAS = 2;

  constructor(private atividadesService: AtividadesService) {}

  getAtividadesComPrazoProximo(): Atividade[] {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // início do dia (corrige erro de horário)

    const atividades = this.atividadesService.getAll();

    return atividades.filter(atividade => {
      if (atividade.concluida) return false;

      const dataEntrega = new Date(atividade.dataEntrega);
      dataEntrega.setHours(23, 59, 59, 999); // fim do dia

      const diffDias =
        (dataEntrega.getTime() - hoje.getTime()) /
        (1000 * 60 * 60 * 24);

      return diffDias >= 0 && diffDias <= this.LIMITE_DIAS;
    });
  }
}
