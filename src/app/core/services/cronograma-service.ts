import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudyBlock } from '../models/study-block';

@Injectable({ providedIn: 'root' })
export class CronogramaService {

  private api = 'http://localhost:3000/study-blocks';

  constructor(private http: HttpClient) {}

  getWeekly() {
    return this.http.get<StudyBlock[]>(this.api);
  }

  create(block: StudyBlock) {
    return this.http.post<StudyBlock>(this.api, block);
  }

  update(id: number, block: StudyBlock) {
    return this.http.put<StudyBlock>(`${this.api}/${id}`, block);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
