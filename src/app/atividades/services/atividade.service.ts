import { Injectable } from '@angular/core';
import { Atividade } from '../models/atividade.model';

@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  private KEY = 'intelectus_atividades';

  getAll(): Atividade[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  }

  saveAll(atividades: Atividade[]): void {
    localStorage.setItem(this.KEY, JSON.stringify(atividades));
  }

  add(atividade: Atividade): void {
    const atividades = this.getAll();
    atividades.push(atividade);
    this.saveAll(atividades);
  }

  marcarComoConcluida(id: number): void {
    const atividades = this.getAll().map(a =>
      a.id === id ? { ...a, concluida: true } : a
    );

    this.saveAll(atividades);
  }
}
