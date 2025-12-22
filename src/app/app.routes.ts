import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

import { Dashboard } from './dashboard/dashboard';
import { CronogramaSemanal } from './cronograma/pages/cronograma-semanal/cronograma-semanal';
import { CadastrarAtividade } from './atividades/pages/cadastrar-atividade/cadastrar-atividade';
import { Desempenho } from './desempenho/pages/desempenho/desempenho';
import { Perfil } from './perfil/pages/perfil/perfil';

import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  // 🔓 ROTAS PÚBLICAS
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },

  // 🔐 ROTAS PROTEGIDAS
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard]
  },
  {
    path: 'cronograma',
    component: CronogramaSemanal,
    canActivate: [AuthGuard]
  },
  {
    path: 'atividades/nova',
    component: CadastrarAtividade,
    canActivate: [AuthGuard]
  },
  {
    path: 'desempenho',
    component: Desempenho,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: Perfil,
    canActivate: [AuthGuard]
  },

  // ❌ FALLBACK
  {
    path: '**',
    redirectTo: ''
  }
];
