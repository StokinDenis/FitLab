import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FitMapComponent } from "../fit-map/fit-map.component";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { PersonalInformationComponent } from "../personal-information/personal-information.component";
import { Trainer } from "../../trainer";

@Component({
    selector: "app-home-page",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, FitMapComponent, FooterComponent, HeaderComponent, PersonalInformationComponent],
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
    public trainers: Trainer[] = [
        {
            name: "Сергей",
            surname: "Морозов",
            expertise: "5+ лет опыта",
            skills: ["YOGA"],
            avatar: "/assets/trainer1.png",
        },
        {
            name: "Марина",
            surname: "Ильина",
            expertise: "5+ лет опыта",
            skills: ["DEEP STRETCH", "STRETCH&GO"],
            avatar: "/assets/trainer2.jpg",
        },
        {
            name: "Михаил",
            surname: "Смирнов",
            expertise: "4 года опыта",
            skills: ["PUMP", "TRX"],
            avatar: "/assets/trainer3.png",
        },
        {
            name: "Юлия",
            surname: "Краснова",
            expertise: "5+ лет опыта",
            skills: ["YOGA", "PILATES STUDIO"],
            avatar: "/assets/trainer4.jpg",
        },
    ];

    public getFullName(trainer: Trainer): string {
        return trainer.name + " " + trainer.surname;
    }
}
