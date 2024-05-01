import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-fitness-trainer-pge',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './fitness-trainer-pge.component.html',
  styleUrls: ['./fitness-trainer-pge.component.scss']
})
export class FitnessTrainerPgeComponent {

}
