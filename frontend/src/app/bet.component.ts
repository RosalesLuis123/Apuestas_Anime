// Copyright © 2025 Tu Nombre. All rights reserved.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bet',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './bet.component.html',
})
export class BetComponent implements OnInit {
  balance = 1000;
  bets: any[] = [];
  form = {
    series: 'naruto',
    chapter: 1,
    event: 'fight-win',
    amount: 10,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBets();
    this.loadBalance();
  }

  loadBets() {
    this.http.get<any[]>('http://localhost:3000/bets').subscribe({
      next: (data) => (this.bets = data),
      error: (err) => console.error('Error loading bets:', err),
    });
  }

  loadBalance() {
    this.http.get<{ balance: number }>('http://localhost:3000/balance').subscribe({
      next: (data) => (this.balance = data.balance),
      error: (err) => console.error('Error loading balance:', err),
    });
  }

  placeBet() {
    const bet = { ...this.form, outcome: 'pending', winnings: 0 };
    this.http.post('http://localhost:3000/bets', bet).subscribe({
      next: () => {
        this.bets.push(bet);
        this.balance -= bet.amount;
        this.http.post('http://localhost:3000/balance', { balance: this.balance }).subscribe();
        this.form.amount = 10;
      },
      error: (err) => console.error('Error placing bet:', err),
    });
  }
}