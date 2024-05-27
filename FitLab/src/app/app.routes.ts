import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {SchedulePageComponent} from "./components/schedule-page/schedule-page.component";
import {FitnessTrainerPgeComponent} from "./components/fitness-trainer-pge/fitness-trainer-pge.component";
import {FitnessServicesPageComponent} from "./components/fitness-services-page/fitness-services-page.component";
import {ContactsPageComponent} from "./components/contacts-page/contacts-page.component";
import {AuthorizationWindowComponent} from "./components/authorization-window/authorization-window.component";
import {authGuardFn, registrGuardFn} from "../app/guard/aus.guards";
export const routes: Routes = [
  {
    path: "",
    redirectTo: 'HomePage',
    pathMatch: "full"
  },
  {
    path: "HomePage",
    component: HomePageComponent,
  },
  {
    path: "schedulePage",
    component: SchedulePageComponent,
    canActivate: [authGuardFn, ],
  },
  {
    path: "trainersPage",
    component: FitnessTrainerPgeComponent,
    canActivate: [authGuardFn],
  },
  {
    path: "fitnessServices",
    component: FitnessServicesPageComponent,
    canActivate: [authGuardFn, ],
  },
  {
    path: 'contactsPage',
    component: ContactsPageComponent,
    canActivate: [authGuardFn,],
  },
  {
    path: "registration",
    component: AuthorizationWindowComponent,
    canActivate:[registrGuardFn,],
  },

];
