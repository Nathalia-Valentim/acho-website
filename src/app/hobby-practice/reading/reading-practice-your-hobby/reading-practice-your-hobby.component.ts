import { Component } from '@angular/core';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../hobby-components/filter/filter.component';
import { MapsComponent } from '../../hobby-components/maps/maps.component';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reading-practice-your-hobby',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, ReadingActionBarComponent, FilterComponent, MapsComponent, FooterComponent],
  templateUrl: './reading-practice-your-hobby.component.html',
  styleUrl: './reading-practice-your-hobby.component.css'
})
export class ReadingPracticeYourHobbyComponent {

}
