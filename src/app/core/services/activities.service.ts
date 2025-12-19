import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({ providedIn: 'root' })
export class ActivitiesService {

  private api = 'http://localhost:3000/activities';

  constructor(private http: HttpClient, private auth: AuthService) {}

  private headers() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getToken()}`
      })
    };
  }

  list(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.api, this.headers());
  }

  create(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.api, activity, this.headers());
  }

  update(id: number, activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(`${this.api}/${id}`, activity, this.headers());
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`, this.headers());
  }
}
