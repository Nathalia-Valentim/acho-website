import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingActionBarComponent } from './reading-action-bar.component';

describe('ReadingActionBarComponent', () => {
  let component: ReadingActionBarComponent;
  let fixture: ComponentFixture<ReadingActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingActionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
