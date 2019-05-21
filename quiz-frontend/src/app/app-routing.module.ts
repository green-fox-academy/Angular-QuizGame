import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameOverComponent } from './components/game-over/game-over.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'game' },
  { path: 'game', component: GameComponent },
  { path: 'game-over', component: GameOverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
