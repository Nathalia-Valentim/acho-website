import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingTipsComponent } from './reading-tips.component';

describe('ReadingTipsComponent', () => {
  let component: ReadingTipsComponent;
  let fixture: ComponentFixture<ReadingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
