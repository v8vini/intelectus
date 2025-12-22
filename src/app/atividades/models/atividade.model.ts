export interface Atividade {
  id: number;
  titulo: string;
  descricao: string;
  disciplina: string;
  prioridade: 'Baixa' | 'Média' | 'Alta';
  dataEntrega: string;
  concluida: boolean;
}
