import { Component } from '@angular/core';
import { HomeSectionComponent } from "./home-section/home-section.component";
import { ProductsSectionComponent } from "./products-section/products-section.component";
import { HeaderComponent } from "./header/header.component";
import { PaymentsSectionComponent } from "./payments-section/payments-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: 'app-userpage',
    standalone: true,
    templateUrl: './userpage.component.html',
    styleUrl: './userpage.component.css',
    imports: [HomeSectionComponent, HeaderComponent, ProductsSectionComponent, PaymentsSectionComponent, AboutSectionComponent, FooterComponent]
})
export class UserpageComponent {
  
}
