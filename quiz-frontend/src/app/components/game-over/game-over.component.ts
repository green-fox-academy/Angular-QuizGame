import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {
  score: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.score = parseInt(this.route.snapshot.queryParamMap.get('score'), 10);
  }
}
