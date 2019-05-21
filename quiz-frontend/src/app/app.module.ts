import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { QuestionComponent } from './components/question/question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameOverComponent } from './components/game-over/game-over.component';

@NgModule({
  declarations: [AppComponent, GameComponent, QuestionComponent, GameOverComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
