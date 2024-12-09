import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services =[
    {
      "service": "Online service",
      "description": "Access to multiplayer games",
      "price": "+$1/mo"
    },
    {
      "service": "Large storage",
      "description": "Extra 1TB of cloud save",
      "price": "+$2/mo"
    },
    {
      "service": "Customizable Profile",
      "description": "Custom theme on your profile",
      "price": "+$2/mo"
    }
  ]

}
