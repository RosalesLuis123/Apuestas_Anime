// Copyright © 2025 Tu Nombre. All rights reserved.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  goToBets() {
    const appComponent = document.querySelector('app-root') as any;
    if (appComponent) {
      appComponent.showBets = true;
    }
  }
}