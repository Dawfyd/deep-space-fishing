import { Component } from '@angular/core';
import { LeaderboardTableComponent } from '../../Components/leaderboard-table/leaderboard-table.component';
import { MarketTableComponent } from '../../Components/market-table/market-table.component';
import { NetworkService } from '../../Services/network.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [LeaderboardTableComponent,MarketTableComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isOffline = false;
  selectedView = 'leaderboard';

  constructor(private network: NetworkService) {}

  ngOnInit() {
    this.network.isOnline$.subscribe((online) => {
      this.isOffline = !online;
    });
  }
}
