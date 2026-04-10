Project 1 — Notification Banner
Build a reusable <notification-banner> component that projects its message content via a single <ng-content>. 
The parent decides what text (or even HTML) goes inside — the component just handles the styling and dismiss button.
What to build:
A NotificationBannerComponent with a colored strip, an icon, and an <ng-content> slot for the message
A parent that renders 3 banners: a success, a warning, and an error — each projecting different text
A dismiss button on the component that hides the banner
Skills practiced: basic single-slot projection, @Input() for the type/color, (click) event handling
Example usage the parent writes:

HTML
<notification-banner type="success">
Your file was uploaded successfully!
</notification-banner>
<notification-banner type="error">
<strong>Failed:</strong> Could not reach the server.
</notification-banner>
Project 2 — Profile Card
Build a <profile-card> component with three named slots using select: one for the avatar, one for the user's name/title, and one for an action button row.
What to build:
A ProfileCardComponent with <ng-content select="[card-avatar]">, <ng-content select="[card-info]">, and <ng-content select="[card-actions]"> slots
A parent that renders two cards side by side — one for a developer, one for a designer — each with different avatars, bios, and buttons
Bonus: add a bare <ng-content> catch-all at the bottom so extra content (like a status badge) falls through automatically
Skills practiced: multi-slot projection with select, attribute selectors, the catch-all fallback
Example usage:

HTML
<profile-card>
<img card-avatar src="avatar.png" />

  <div card-info>
    <h3>Sara Chen</h3>
    <p>Frontend Engineer</p>
  </div>
  <div card-actions>
    <button>Message</button>
    <button>Follow</button>
  </div>
  <!-- falls into catch-all -->
  <span class="badge">Online</span>
</profile-card>
