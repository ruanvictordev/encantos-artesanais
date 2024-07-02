import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service'; 

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }
}
