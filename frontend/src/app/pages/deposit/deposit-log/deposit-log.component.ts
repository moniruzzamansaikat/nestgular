import { Component } from '@angular/core';
import { SetTitle, TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-deposit-log',
  standalone: true,
  imports: [],
  templateUrl: './deposit-log.component.html',
  styleUrl: './deposit-log.component.scss'
})
@SetTitle("Deposit Log")
export class DepositLogComponent {
  constructor(private titleService: TitleService) {}
}
