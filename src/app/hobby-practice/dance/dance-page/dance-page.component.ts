import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ActionBarComponent } from "../../hobby-components/action-bar/action-bar.component";
import { PracticeyourhobbyComponent } from "../../hobby-components/practiceyourhobby/practiceyourhobby.component";
import { DancePracticeYourHobbyComponent } from "../dance-hobby-components/dance-practice-your-hobby/dance-practice-your-hobby.component";

@Component({
  selector: 'app-dance-page',
  standalone: true,
  imports: [RouterModule, DancePracticeYourHobbyComponent],
  templateUrl: './dance-page.component.html',
  styleUrl: './dance-page.component.css'
})
export class DancePageComponent {
}
