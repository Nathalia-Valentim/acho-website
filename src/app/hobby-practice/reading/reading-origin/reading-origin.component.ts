import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../../hobby-components/filter/filter.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';

@Component({
  selector: 'app-reading-origin',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FooterComponent, ReadingPracticeYourHobbyComponent],
  templateUrl: './reading-origin.component.html',
  styleUrl: './reading-origin.component.css'
})
export class ReadingOriginComponent {

}
