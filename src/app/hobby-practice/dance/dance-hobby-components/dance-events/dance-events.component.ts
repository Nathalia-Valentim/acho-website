import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../../shared/components/navbar/navblue/navblue.component';
import { DanceActionBarComponent } from '../dance-action-bar/dance-action-bar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-dance-events',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, DanceActionBarComponent, FooterComponent],
  templateUrl: './dance-events.component.html',
  styleUrl: './dance-events.component.css'
})
export class DanceEventsComponent {

}
