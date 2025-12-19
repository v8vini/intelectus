import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    {
      name: 'Matemática',
      description: 'Números, lógica e aquele desafio que faz a mente suar.'
    },
    {
      name: 'Português',
      description: 'Palavras, textos e o poder da boa comunicação.'
    },
    {
      name: 'Física',
      description: 'Entenda como o universo funciona (ou quase isso).'
    },
    {
      name: 'Química',
      description: 'Misturas, reações e pequenas explosões mentais.'
    },
    {
      name: 'Biologia',
      description: 'A ciência da vida, do DNA às plantas.'
    },
    {
      name: 'História',
      description: 'Viagens no tempo sem sair da sala.'
    },
    {
      name: 'Geografia',
      description: 'Mapas, climas e o mundo como ele é.'
    },
    {
      name: 'Inglês',
      description: 'O idioma que conecta você ao mundo.'
    },
    {
      name: 'Programação',
      description: 'Transforme ideias em código e soluções.'
    },
    {
      name: 'Redes de Computadores',
      description: 'Como tudo se conecta por trás da internet.'
    }
  ];

  selected: string[] = [];
  loading = false;

  constructor(private service: SubjectsService) {}

  toggle(name: string) {
    if (this.selected.includes(name)) {
      this.selected = this.selected.filter(s => s !== name);
    } else {
      this.selected.push(name);
    }
  }

  isSelected(name: string): boolean {
    return this.selected.includes(name);
  }

  save() {
    if (!this.selected.length) return;

    this.loading = true;

    const requests = this.selected.map(name =>
      this.service.create({ name })
    );

    Promise.all(requests.map(r => r.toPromise()))
      .then(() => {
        alert('Disciplinas confirmadas com sucesso!');
        this.selected = [];
      })
      .finally(() => this.loading = false);
  }
}
