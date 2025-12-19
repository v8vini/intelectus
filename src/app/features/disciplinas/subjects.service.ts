import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubjectsService {

  private api = 'http://localhost:3000/subjects';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  private headers() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getToken()}`
      })
    };
  }

  list(): Observable<any[]> {
    return this.http.get<any[]>(this.api, this.headers());
  }

  create(data: { name: string; color?: string }) {
    return this.http.post(this.api, data, this.headers());
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`, this.headers());
  }
}
