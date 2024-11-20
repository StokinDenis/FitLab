import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-contacts-page",
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./contacts-page.component.html",
    styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent {}
