import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor() {}

  getRandom(): Observable<Question> {
    return of({
      description: 'When did the titanic sink?',
      answers: [
        { description: '1912', isCorrect: true },
        { description: '1914', isCorrect: false },
        { description: '1917', isCorrect: false },
        { description: '1918', isCorrect: false }
      ]
    });
  }
}
