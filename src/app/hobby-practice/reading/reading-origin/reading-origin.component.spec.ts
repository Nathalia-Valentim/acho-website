import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingOriginComponent } from './reading-origin.component';

describe('ReadingOriginComponent', () => {
  let component: ReadingOriginComponent;
  let fixture: ComponentFixture<ReadingOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingOriginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
