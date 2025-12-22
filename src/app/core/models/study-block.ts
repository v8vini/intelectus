export interface StudyBlock {
  id?: number;
  user_id: number;
  subject_id: number;
  subject_name?: string;
  day_of_week: number;
  start_time: string;
  end_time: string;
  description: string;
}
