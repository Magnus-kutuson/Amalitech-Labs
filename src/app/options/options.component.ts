import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-options',
  imports: [CommonModule, NgFor],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
options = [
  { icon: '/images/icon-arcade.svg', plan: 'arcade', month: '$9/mo', year: '$90/yr' },
  { icon: '/images/icon-advanced.svg', plan: 'advanced', month: '$12/mo', year: '$120/yr' },
  { icon: '/images/icon-pro.svg', plan: 'pro', month: '$15/mo', year: '$150/yr' },
]
}
