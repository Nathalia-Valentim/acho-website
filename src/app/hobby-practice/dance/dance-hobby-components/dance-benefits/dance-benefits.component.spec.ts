import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceBenefitsComponent } from './dance-benefits.component';

describe('DanceBenefitsComponent', () => {
  let component: DanceBenefitsComponent;
  let fixture: ComponentFixture<DanceBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
