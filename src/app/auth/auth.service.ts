import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERS_KEY = 'intelectus_users';
  private LOGGED_KEY = 'intelectus_logged_user';

  private getUsers(): Usuario[] {
    return JSON.parse(localStorage.getItem(this.USERS_KEY) || '[]');
  }

  register(nome: string, email: string, senha: string): boolean {
    if (!nome || !email || !senha) return false;

    const users = this.getUsers();
    if (users.some(u => u.email === email)) return false;

    const user: Usuario = {
      id: Date.now(),
      nome,
      email,
      senha
    };

    users.push(user);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    localStorage.setItem(this.LOGGED_KEY, JSON.stringify(user));
    return true;
  }

  login(email: string, senha: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.senha === senha);

    if (!user) return false;

    localStorage.setItem(this.LOGGED_KEY, JSON.stringify(user));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.LOGGED_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.LOGGED_KEY);
  }

  getUsuarioLogado(): Usuario | null {
    const user = localStorage.getItem(this.LOGGED_KEY);
    return user ? JSON.parse(user) : null;
  }

  atualizarUsuario(dados: Usuario): boolean {
    if (!dados.nome || !dados.email || !dados.senha) return false;

    const users = this.getUsers();
    const index = users.findIndex(u => u.id === dados.id);

    if (index === -1) return false;

    users[index] = { ...users[index], ...dados };

    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    localStorage.setItem(this.LOGGED_KEY, JSON.stringify(users[index]));

    return true;
  }
}
