import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianAddComponent } from './villian-add.component';

describe('VillianAddComponent', () => {
  let component: VillianAddComponent;
  let fixture: ComponentFixture<VillianAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillianAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
