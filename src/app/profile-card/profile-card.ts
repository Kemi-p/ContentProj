import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";


@Component({
    selector: 'profile-card',
    imports: [ CommonModule, MatCardModule],
    templateUrl: './profile-card.html',
    styleUrl:'./profile-card.scss'
})

export class ProfileCard{
}