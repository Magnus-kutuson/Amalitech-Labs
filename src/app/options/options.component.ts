import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-options',
  imports: [CommonModule, NgFor, RouterLink, RouterLinkActive],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
  providers: [DataService]
})
export class OptionsComponent {

  constructor(public dataService: DataService) {}

options = [
  { id: 1, icon: '/images/icon-arcade.svg', plan: 'arcade', month: '$9/mo', year: '$90/yr' },
  { id: 2, icon: '/images/icon-advanced.svg', plan: 'advanced', month: '$12/mo', year: '$120/yr' },
  { id: 3, icon: '/images/icon-pro.svg', plan: 'pro', month: '$15/mo', year: '$150/yr' },
]

selectedPlanId = 1;
selectedPlan(id: number): void {
   this.selectedPlanId = id
}

saveData(key: string, value: string) {

}
}
