import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {routes} from "../../../app.routes";

@Component({
  selector: 'fit-outlogin-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './outlogin-header.component.html',
  styleUrls: ['./outlogin-header.component.scss']
})
export class OutloginHeaderComponent {
  public router = inject(Router)
  openRegistration(): void {
    console.log('Navigating to registration page');
    this.router.navigate(['/registration']);
  }
}
