import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubjectsService } from './subjects.service';

interface SubjectCard {
  name: string;
  description: string;
}

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.html',
  styleUrls: ['./subjects.css']
})
export class Subjects {

  subjects: SubjectCard[] = [
    { name: 'Matemática', description: 'Números, lógica e desafios.' },
    { name: 'Português', description: 'Comunicação e interpretação.' },
    { name: 'Física', description: 'Leis do universo.' },
    { name: 'Química', description: 'Reações e transformações.' },
    { name: 'Biologia', description: 'A ciência da vida.' },
    { name: 'História', description: 'O passado explica o presente.' },
    { name: 'Geografia', description: 'O mundo em mapas.' },
    { name: 'Inglês', description: 'Idioma global.' },
    { name: 'Programação', description: 'Pensar em código.' },
    { name: 'Redes de Computadores', description: 'Conexões invisíveis.' }
  ];

  selected: string[] = [];
  loading = false;

  constructor(
    private service: SubjectsService,
    private router: Router
  ) {}

  toggle(name: string) {
    this.selected.includes(name)
      ? this.selected = this.selected.filter(s => s !== name)
      : this.selected.push(name);
  }

  isSelected(name: string): boolean {
    return this.selected.includes(name);
  }

  async save() {
    if (!this.selected.length) return;

    this.loading = true;

    try {
      await Promise.all(
        this.selected.map(name =>
          this.service.create({ name }).toPromise()
        )
      );

      // ✅ Redireciona para o cronograma
      this.router.navigate(['/dashboard/cronograma']);

    } catch (err) {
      console.error(err);
      alert('Erro ao salvar disciplinas');
    } finally {
      this.loading = false;
    }
  }
}
