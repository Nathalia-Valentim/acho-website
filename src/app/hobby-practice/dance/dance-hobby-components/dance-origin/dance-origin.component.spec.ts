import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceOriginComponent } from './dance-origin.component';

describe('DanceOriginComponent', () => {
  let component: DanceOriginComponent;
  let fixture: ComponentFixture<DanceOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceOriginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
