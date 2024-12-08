import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingEventsComponent } from './reading-events.component';

describe('ReadingEventsComponent', () => {
  let component: ReadingEventsComponent;
  let fixture: ComponentFixture<ReadingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
