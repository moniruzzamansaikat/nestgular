import { Component, OnInit } from '@angular/core';
import { SetTitle, TitleService } from '../../../title.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

@SetTitle("Dashboard")
export class DashboardComponent  {
    constructor(public titleService: TitleService) {}
}
