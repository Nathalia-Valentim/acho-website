import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingPracticeYourHobbyComponent } from './reading-practice-your-hobby.component';

describe('ReadingPracticeYourHobbyComponent', () => {
  let component: ReadingPracticeYourHobbyComponent;
  let fixture: ComponentFixture<ReadingPracticeYourHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingPracticeYourHobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingPracticeYourHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
