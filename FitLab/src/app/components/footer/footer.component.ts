import {ChangeDetectionStrategy, Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fit-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
