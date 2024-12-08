import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingMaterialsComponent } from './reading-materials.component';

describe('ReadingMaterialsComponent', () => {
  let component: ReadingMaterialsComponent;
  let fixture: ComponentFixture<ReadingMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
