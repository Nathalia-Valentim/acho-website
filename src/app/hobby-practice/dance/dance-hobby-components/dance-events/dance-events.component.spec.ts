import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceEventsComponent } from './dance-events.component';

describe('DanceEventsComponent', () => {
  let component: DanceEventsComponent;
  let fixture: ComponentFixture<DanceEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
