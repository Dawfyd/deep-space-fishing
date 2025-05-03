// game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://api-game.bloque.app/game/';
  private pathLeaderboard = 'leaderboard';
  private pathMarket = 'market';

  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get<any[]>(this.apiUrl + this.pathLeaderboard).pipe(
      tap(data => localStorage.setItem('leaderboard-cache', JSON.stringify(data))),
      catchError(() => {
        const cached = localStorage.getItem('leaderboard-cache');
        return of(cached ? JSON.parse(cached) : []);
      })
    );
  }

  getMarketItems() {
    return this.http.get<any[]>(this.apiUrl + this.pathMarket).pipe(
      tap(data => localStorage.setItem('market-cache', JSON.stringify(data))),
      catchError(() => {
        const cached = localStorage.getItem('market-cache');
        return of(cached ? JSON.parse(cached) : []);
      })
    );
  }
}
