import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingFundamentalsComponent } from './reading-fundamentals.component';

describe('ReadingFundamentalsComponent', () => {
  let component: ReadingFundamentalsComponent;
  let fixture: ComponentFixture<ReadingFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingFundamentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
