import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  firstName = '';
  step = 1;

  private timers: any[] = [];

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.firstName = this.authService.getFirstName() || 'Estudante';

    this.sequence();
  }

  sequence() {
    this.timers.push(setTimeout(() => {
      this.step = 2;
      this.cdr.detectChanges();
    }, 2500));

    this.timers.push(setTimeout(() => {
      this.step = 3;
      this.cdr.detectChanges();
    }, 5000));

    this.timers.push(setTimeout(() => {
      this.step = 4;
      this.cdr.detectChanges();
    }, 7500));
  }

  ngOnDestroy(): void {
    this.timers.forEach(t => clearTimeout(t));
  }
}
