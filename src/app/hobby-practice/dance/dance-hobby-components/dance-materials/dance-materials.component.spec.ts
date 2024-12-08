import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceMaterialsComponent } from './dance-materials.component';

describe('DanceMaterialsComponent', () => {
  let component: DanceMaterialsComponent;
  let fixture: ComponentFixture<DanceMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
