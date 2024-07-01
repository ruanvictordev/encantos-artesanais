import { Component } from '@angular/core';
import { HomeSectionComponent } from "./home-section/home-section.component";

@Component({
    selector: 'app-userpage',
    standalone: true,
    templateUrl: './userpage.component.html',
    styleUrl: './userpage.component.css',
    imports: [HomeSectionComponent]
})
export class UserpageComponent {

}
