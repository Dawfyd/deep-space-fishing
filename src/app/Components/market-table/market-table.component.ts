import { Component, OnInit } from '@angular/core';
import { GameService } from '../../Services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-table',
  imports: [CommonModule],
  templateUrl: './market-table.component.html',
  styleUrl: './market-table.component.scss'
})
export class MarketTableComponent implements OnInit {
  market: any[] = [];
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.getData();

  }
  getData() {
    this.gameService.getMarketItems().subscribe({
      next: (data) => {
        this.market = data.items;
      },
      error: (err) => {
        console.error('Error fetching market:', err);
      }
    });
  }
}
