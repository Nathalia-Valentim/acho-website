import { Component } from '@angular/core';
import { ReadingActionBarComponent } from '../reading-action-bar/reading-action-bar.component';
import { RouterModule } from '@angular/router';
import { NavblueComponent } from '../../../shared/components/navbar/navblue/navblue.component';
import { CommonModule } from '@angular/common';
import { ReadingPracticeYourHobbyComponent } from '../reading-practice-your-hobby/reading-practice-your-hobby.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-reading-materials',
  standalone: true,
  imports: [RouterModule, NavblueComponent, ReadingActionBarComponent, CommonModule, NavblueComponent, FooterComponent, ReadingPracticeYourHobbyComponent],
  templateUrl: './reading-materials.component.html',
  styleUrl: './reading-materials.component.css'
})
export class ReadingMaterialsComponent {

}
