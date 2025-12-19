import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivitiesService } from '../../core/services/activities.service';
import { Activity } from '../../core/models/activity.model';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})
export class Activities implements OnInit {

  activities: Activity[] = [];
  newActivity: Activity = {
    title: '',
    subjectId: 0,
    type: 'WORK',
    deadline: '',
    priority: 'MEDIUM',
    done: false
  };

  loading = false;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activitiesService.list().subscribe((res: Activity[]) => {
      this.activities = res.map(a => ({ ...a, done: a.done ?? false }));
    });
  }

  create(): void {
    if (!this.newActivity.title || !this.newActivity.subjectId || !this.newActivity.deadline) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    this.loading = true;
    this.activitiesService.create({ ...this.newActivity }).subscribe({
      next: () => {
        this.loadActivities();
        this.newActivity = {
          title: '',
          subjectId: 0,
          type: 'WORK',
          deadline: '',
          priority: 'MEDIUM',
          done: false
        };
      },
      error: err => alert(err.error?.message || 'Erro ao criar atividade'),
      complete: () => this.loading = false
    });
  }

  markDone(activity: Activity): void {
    activity.done = !activity.done;
    this.activitiesService.update(activity.id!, { ...activity }).subscribe();
  }

  deleteActivity(activity: Activity): void {
    if (!confirm('Deseja realmente excluir esta atividade?')) return;
    this.activitiesService.delete(activity.id!).subscribe(() => this.loadActivities());
  }
}