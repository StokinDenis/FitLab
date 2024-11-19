import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  formGroup = new FormGroup({
    date: new FormControl("04/02/1991"),
    number: new FormControl("+375(25)798-00-90"),
    email: new FormControl("katerina.shom@gmail.com"),
  })

  changeName(){
    this.visibility = true
  }

  visibility: boolean = true;
  visibilityOff() {
    this.visibility = false
  }
}
