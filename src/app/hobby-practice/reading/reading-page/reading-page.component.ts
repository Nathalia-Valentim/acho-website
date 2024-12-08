import { Component } from '@angular/core';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { RouterModule, Routes } from '@angular/router';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../../hobby-components/filter/filter.component';
import { MapsComponent } from '../../hobby-components/maps/maps.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';


@Component({
  selector: 'app-reading-page',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FilterComponent, MapsComponent, FooterComponent, ReadingPracticeYourHobbyComponent],
  templateUrl: './reading-page.component.html',
  styleUrl: './reading-page.component.css'
})
export class ReadingPageComponent {

}
