import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DanceActionBarComponent } from '../dance-action-bar/dance-action-bar.component';
import { FilterComponent } from '../../../hobby-components/filter/filter.component';
import { MapsComponent } from '../../../hobby-components/maps/maps.component';
import { NavblueComponent } from '../../../../shared/components/navbar/navblue/navblue.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-dance-practice-your-hobby',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, DanceActionBarComponent, FilterComponent, MapsComponent, FooterComponent],
  templateUrl: './dance-practice-your-hobby.component.html',
  styleUrl: './dance-practice-your-hobby.component.css'
})
export class DancePracticeYourHobbyComponent {

}
