import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: "app-authorization-window",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./authorization-window.component.html",
    styleUrls: ["./authorization-window.component.scss"],
})
export class AuthorizationWindowComponent {
    public formGroup = new FormGroup({
        name: new FormControl<string>("", [Validators.required]),
        phone: new FormControl<string>("", [Validators.required]),
    });

    public isClient: boolean = false;
    public isTrainer: boolean = false;

    clientLogin() {
        console.log("Клиент");
        this.isTrainer = false;
        this.isClient = true;
    }

    trainerLogin() {
        console.log("Тренер");
        this.isTrainer = true;
        this.isClient = false;
    }
}
