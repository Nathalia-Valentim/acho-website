import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceTipsComponent } from './dance-tips.component';

describe('DanceTipsComponent', () => {
  let component: DanceTipsComponent;
  let fixture: ComponentFixture<DanceTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
