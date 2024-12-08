import { Component } from '@angular/core';
import { DanceActionBarComponent } from '../dance-action-bar/dance-action-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../../shared/components/navbar/navblue/navblue.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-dance-origin',
  standalone: true,
  imports: [CommonModule, RouterModule, NavblueComponent, DanceActionBarComponent, FooterComponent],
  templateUrl: './dance-origin.component.html',
  styleUrl: './dance-origin.component.css'
})
export class DanceOriginComponent {

}
