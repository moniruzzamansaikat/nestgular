import { Component } from '@angular/core';
import { SetTitle, TitleService } from '../../../title.service';

@Component({
  selector: 'app-new-deposit',
  standalone: true,
  imports: [],
  templateUrl: './new-deposit.component.html',
  styleUrl: './new-deposit.component.scss'
})
@SetTitle("New Deposit")
export class NewDepositComponent {
  constructor(private titleService: TitleService) {}
}
