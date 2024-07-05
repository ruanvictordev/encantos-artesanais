import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { CartPopupComponent } from "../cart-popup/cart-popup.component"; 

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, CartPopupComponent]
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }
}
