import { Answer } from './answer';

export interface Question {
  description: string;
  answers: Answer[];
}
