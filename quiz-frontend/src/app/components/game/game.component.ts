import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  score = 0;
  lives = 2;

  question: Question;
  countdown = 0;

  constructor(private questionSvc: QuestionService, private router: Router) {}

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion(): void {
    this.questionSvc.getRandom().subscribe(question => (this.question = question), err => console.log(err));
  }

  onAnswer(isCorrect: boolean): void {
    isCorrect ? this.score++ : this.lives--;

    if (this.lives <= 0) {
      this.router.navigate(['/game-over'], { queryParams: { score: this.score.toString() } });
    } else {
      this.countdown = 3;
      const interval = setInterval(() => this.countdown--, 1000);

      setTimeout(() => {
        clearInterval(interval);
        this.loadQuestion();
      }, 3000);
    }
  }
}
