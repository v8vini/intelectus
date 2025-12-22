import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { Subjects } from './features/disciplinas/subjects';
import { CronogramaSemanal } from './features/cronograma/pages/cronograma-semanal/cronograma-semanal';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },

  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: Subjects },
      { path: 'cronograma', component: CronogramaSemanal }
    ]
  },

  { path: '**', redirectTo: '' }
];