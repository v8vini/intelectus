// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { DashboardComponent } from './dashboard/dashboard';
import { Subjects } from './features/disciplinas/subjects';
import { Activities } from './features/atividades/activities';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  // Home pública
  { path: '', component: Home },

  // Rotas públicas
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Área protegida
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // Ao entrar no dashboard, já mostra disciplinas
      { path: '', component: Subjects },
      // Rota para atividades dentro do dashboard
      { path: 'activities', component: Activities }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '' }
];
