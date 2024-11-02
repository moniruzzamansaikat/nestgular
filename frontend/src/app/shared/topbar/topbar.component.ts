import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu'
import { UserService } from '../../user.service';

@Component({
    selector: 'topbar',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    standalone: true,
    imports: [
        MenubarModule,
        RouterLink,
        MenubarModule,
        MenuModule,
        ButtonModule,
        BadgeModule,
        AvatarModule,
        InputTextModule,
        RippleModule,
        CommonModule
    ]
})
export class TopbarComponent implements OnInit {
    items: MenuItem[] | undefined;
    userItems: MenuItem[] | undefined;
    router = inject(Router);
    user: any = null;

    constructor(
        private userService: UserService
    ) { }

    logoutUser() {
        this.userService.logoutUser();
        this.user = null;
        this.router.navigate(['/auth/login']);
    }

    updateMenuItems() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.router.navigate(['/'])
            },
            {
                label: 'Deposit',
                icon: 'pi pi-credit-card',
                items: [
                    {
                        label: 'Deposit Log',
                        icon: 'pi pi-list'
                    },
                    {
                        label: 'New Deposit',
                        icon: 'pi pi-plus'
                    },
                ],
                visible: !!this.user
            },
            {
                label: 'Withdrawals',
                icon: 'pi pi-money-bill',
                items: [
                    {
                        label: 'Withdraw Log',
                        icon: 'pi pi-list'
                    },
                    {
                        label: 'New Withdraw',
                        icon: 'pi pi-plus'
                    },
                ],
                visible: !!this.user
            },
            {
                label: 'Login',
                icon: 'pi pi-lock',
                command: () => this.router.navigate(['/auth/login']),
                visible: !this.user
            },
            {
                label: 'Register',
                icon: 'pi pi-user',
                command: () => this.router.navigate(['/auth/register']),
                visible: !this.user
            },
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                command: () => this.router.navigate(['/user/dashboard']),
                visible: !!this.user
            },
            {
                label: 'Logout',
                icon: 'pi pi-key',
                command: () => this.logoutUser(),
                visible: !!this.user
            },
        ];
    }

    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.user = user;
            this.updateMenuItems();
        });

        this.updateMenuItems();

        this.userItems = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Refresh',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-upload'
                    }
                ]
            }
        ];
    }
}