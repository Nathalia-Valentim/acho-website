import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceActionBarComponent } from './dance-action-bar.component';

describe('DanceActionBarComponent', () => {
  let component: DanceActionBarComponent;
  let fixture: ComponentFixture<DanceActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceActionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
