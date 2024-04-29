import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FitMapComponent} from "../fit-map/fit-map.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [CommonModule, FitMapComponent, FooterComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

}
