import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: "app-schedule-page",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: "./schedule-page.component.html",
    styleUrls: ["./schedule-page.component.scss"],
})
export class SchedulePageComponent {}
