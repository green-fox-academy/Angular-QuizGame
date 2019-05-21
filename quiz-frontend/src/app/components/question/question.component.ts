import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnChanges {
  @Input() question: Question;
  @Output() select = new EventEmitter<boolean>();
  selectedAnswer: Answer;

  userAnswer(answer: Answer) {
    this.select.emit(answer.isCorrect);
    this.selectedAnswer = answer;
  }

  ngOnChanges() {
    this.selectedAnswer = undefined;
  }
}
