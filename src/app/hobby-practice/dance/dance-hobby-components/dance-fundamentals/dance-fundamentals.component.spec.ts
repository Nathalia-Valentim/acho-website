import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceFundamentalsComponent } from './dance-fundamentals.component';

describe('DanceFundamentalsComponent', () => {
  let component: DanceFundamentalsComponent;
  let fixture: ComponentFixture<DanceFundamentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceFundamentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
