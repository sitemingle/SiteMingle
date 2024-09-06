import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTabGroup, MatTab],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

}
