import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: "app-fitness-services-page",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HeaderComponent, FooterComponent],
    templateUrl: "./fitness-services-page.component.html",
    styleUrls: ["./fitness-services-page.component.scss"],
})
export class FitnessServicesPageComponent {}
