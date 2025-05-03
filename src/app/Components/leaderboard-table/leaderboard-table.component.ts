import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { Player } from '../../Interfaces/player.interface';

@Component({
  selector: 'app-leaderboard-table',
  imports: [CommonModule],
  templateUrl: './leaderboard-table.component.html',
  styleUrl: './leaderboard-table.component.scss'
})
export class LeaderboardTableComponent implements OnInit {


  leaderboard: Player[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getData();

  }
  getData() {
    this.gameService.getLeaderboard().subscribe({
      next: (data) => {
        this.leaderboard = data.players;
      },
      error: (err) => {
        console.error('Error fetching leaderboard:', err);
      }
    });
  }
}
