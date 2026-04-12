import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationBanner } from './notif-banner/notif-banner';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  imports: [NotificationBanner, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ContentProj-notifBanner');
}
