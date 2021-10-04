import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianSelectorComponent } from './villian-selector.component';

describe('VillianSelectorComponent', () => {
  let component: VillianSelectorComponent;
  let fixture: ComponentFixture<VillianSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillianSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
