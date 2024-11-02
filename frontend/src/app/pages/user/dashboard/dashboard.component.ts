import { Component, OnInit } from '@angular/core';
import { SetTitle, TitleService } from '../../../services/title.service';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MessagesModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

@SetTitle("Dashboard")
export class DashboardComponent {
  constructor(public titleService: TitleService) { }

  messages = [
    { severity: 'success', summary: 'Welcome to dashboard' },
    { severity: 'info', summary: 'You may not complete your profile' },
    { severity: 'warn', summary: 'Email verification is required' }
  ];

}
