import { Component } from '@angular/core';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-reading-benefits',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FooterComponent, ReadingPracticeYourHobbyComponent],
  templateUrl: './reading-benefits.component.html',
  styleUrl: './reading-benefits.component.css'
})
export class ReadingBenefitsComponent {

}
