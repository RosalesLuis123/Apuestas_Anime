// Copyright © 2025 Tu Nombre. All rights reserved.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BetComponent } from './bet.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, BetComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  showBets = false;

  toggleView() {
    this.showBets = !this.showBets;
  }
}