import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'notification-banner',
    imports: [MatIconModule, CommonModule, MatButtonModule],
    templateUrl: './notif-banner.html',
    styleUrl:'./notif-banner.scss'
})

export class NotificationBanner{
    @Input() type: 'success'|'error'|'warning' = 'success'

    dismissed = false

    dismiss(){
        this.dismissed = true
    }

}