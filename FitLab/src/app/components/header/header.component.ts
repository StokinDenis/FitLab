import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {userStore} from "../../user.store";
import {RouterLink} from "@angular/router";
import {OutloginHeaderComponent} from "./outlogin-header/outlogin-header.component";

@Component({
  selector: 'fit-header',
  standalone: true,
  imports: [CommonModule, RouterLink, OutloginHeaderComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   public userStore = inject(userStore);
   public isAuth$ = this.userStore.selectIsAuth()
}
