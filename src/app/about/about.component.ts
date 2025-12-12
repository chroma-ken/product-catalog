import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
   companyName: string = 'Red Tech Enterprises';

  description: string = `
    Red Tech Enterprises is a forward-thinking technology company committed to delivering 
    innovative solutions to businesses and individuals. We specialize in web and software 
    development, IT consulting, and digital transformation services.
  `;

  mission: string = 'To empower businesses with cutting-edge technology solutions that drive growth and efficiency.';

  vision: string = 'To be a global leader in delivering innovative and accessible technology solutions.';


  services: string[] = ['Sell', 'Buy', 'Vintage Pieces', 'Keyboards', 'Kitchen Needs'];



}
