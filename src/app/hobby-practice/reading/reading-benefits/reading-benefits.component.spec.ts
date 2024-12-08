import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBenefitsComponent } from './reading-benefits.component';

describe('ReadingBenefitsComponent', () => {
  let component: ReadingBenefitsComponent;
  let fixture: ComponentFixture<ReadingBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
