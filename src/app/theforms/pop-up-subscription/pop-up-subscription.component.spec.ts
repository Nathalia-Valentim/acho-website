import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSubscriptionComponent } from './pop-up-subscription.component';

describe('PopUpSubscriptionComponent', () => {
  let component: PopUpSubscriptionComponent;
  let fixture: ComponentFixture<PopUpSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
