import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancePracticeYourHobbyComponent } from './dance-practice-your-hobby.component';

describe('DancePracticeYourHobbyComponent', () => {
  let component: DancePracticeYourHobbyComponent;
  let fixture: ComponentFixture<DancePracticeYourHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DancePracticeYourHobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancePracticeYourHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
