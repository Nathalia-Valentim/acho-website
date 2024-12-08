import { Component } from '@angular/core';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';

@Component({
  selector: 'app-reading-events',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FooterComponent, ReadingPracticeYourHobbyComponent],
  templateUrl: './reading-events.component.html',
  styleUrl: './reading-events.component.css'
})
export class ReadingEventsComponent {

}
