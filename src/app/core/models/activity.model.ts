export interface Activity {
  id?: number;
  title: string;
  subjectId: number;
  subjectName?: string;
  type: 'WORK' | 'EXAM';
  deadline: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  done: boolean;
}
