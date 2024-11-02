import { Component } from '@angular/core';
import { SetTitle, TitleService } from '../../title.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
@SetTitle("Home")
export class HomeComponent {
  constructor(public titleService: TitleService) {}
}
